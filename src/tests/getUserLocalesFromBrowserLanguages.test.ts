import { expect } from 'chai';

import {
  LOCALE_KEY,
  CONSENT_MANAGER_SUPPORTED_LOCALES,
  LocaleValue,
} from '../enums';

import {
  getLanguagesFromNavigator,
  mapBrowserTagToLocale,
  resolveSupportedLocaleForBrowserTag,
  getUserLocalesFromBrowserLanguages,
  getNearestSupportedLocale,
  sortSupportedLocalesByPreference,
  pickDefaultLanguage,
  orderCustomerLocalesForDisplay,
} from '../getUserLocalesFromBrowserLanguages';

const SUPPORTED_ALL: LocaleValue[] = Object.values(
  CONSENT_MANAGER_SUPPORTED_LOCALES,
) as LocaleValue[];

describe('locale-helpers', () => {
  describe('getLanguagesFromNavigator', () => {
    it('uses navigator.languages when available and trims entries', () => {
      const out = getLanguagesFromNavigator(
        [' fr-CA  ', 'en-US', ' '],
        'en-US',
      );
      expect(out).to.deep.equal(['fr-CA', 'en-US']);
    });

    it('falls back to navigator.language when languages is empty/undefined', () => {
      const out1 = getLanguagesFromNavigator([], 'de-DE');
      expect(out1).to.deep.equal(['de-DE']);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const out2 = getLanguagesFromNavigator(null as any, 'de-DE');
      expect(out2).to.deep.equal(['de-DE']);
    });
  });

  describe('mapBrowserTagToLocale (case-insensitive + base fallback)', () => {
    it('maps exact tags regardless of case', () => {
      expect(mapBrowserTagToLocale('fr-CA')).to.equal(LOCALE_KEY.FrCa);
      expect(mapBrowserTagToLocale('FR-ca')).to.equal(LOCALE_KEY.FrCa);
      expect(mapBrowserTagToLocale('En-US')).to.equal(LOCALE_KEY.EnUs);
    });

    it('falls back to base when the specific tag is not present', () => {
      // no specific fr-XX -> use base mapping 'fr'
      expect(mapBrowserTagToLocale('fr-XX')).to.equal(LOCALE_KEY.Fr);
      // zh-hant-XX -> base is 'zh' (which maps to ZhCn in the browser map)
      expect(mapBrowserTagToLocale('ZH-hant-XX')).to.equal(LOCALE_KEY.ZhCn);
    });

    it('returns undefined when neither exact nor base exist', () => {
      expect(mapBrowserTagToLocale('zz-QQ')).to.equal(undefined);
    });
  });

  describe('resolveSupportedLocaleForBrowserTag', () => {
    const SUPPORTED_DEMO: LocaleValue[] = [
      LOCALE_KEY.Ar, // base arabic
      LOCALE_KEY.ArAe, // a variant
      LOCALE_KEY.FrFr,
      LOCALE_KEY.FrCa,
      LOCALE_KEY.EnUs,
      LOCALE_KEY.EnGb,
      LOCALE_KEY.EsEs,
      LOCALE_KEY.ZhCn,
      LOCALE_KEY.ZhHk,
    ];

    it('returns mapped locale when it is supported', () => {
      expect(
        resolveSupportedLocaleForBrowserTag('fr-CA', SUPPORTED_DEMO),
      ).to.equal(LOCALE_KEY.FrCa);
    });

    it('when mapped is unsupported, uses short base if it is supported', () => {
      // base 'ar' is supported
      expect(
        resolveSupportedLocaleForBrowserTag('ar-EG', SUPPORTED_DEMO),
      ).to.equal(LOCALE_KEY.Ar);
    });

    it('when short base not supported, picks first variant of same base (customer order respected)', () => {
      const supported: LocaleValue[] = [
        LOCALE_KEY.ArAe,
        LOCALE_KEY.FrFr,
        LOCALE_KEY.EnUs,
      ];
      expect(resolveSupportedLocaleForBrowserTag('ar-OM', supported)).to.equal(
        LOCALE_KEY.ArAe,
      );
    });

    it('returns undefined if no base or variant is supported', () => {
      const supported: LocaleValue[] = [LOCALE_KEY.FrFr, LOCALE_KEY.EnUs];
      expect(resolveSupportedLocaleForBrowserTag('ar-OM', supported)).to.equal(
        undefined,
      );
    });
  });

  describe('getUserLocalesFromBrowserLanguages', () => {
    it('produces ordered, unique list constrained by supported', () => {
      const supported: LocaleValue[] = [
        LOCALE_KEY.Ar,
        LOCALE_KEY.FrCa,
        LOCALE_KEY.EnUs,
        LOCALE_KEY.EsEs,
      ];
      const browser = ['ar-EG', 'fr-CA', 'en-US', 'fr-CA']; // dup fr-CA
      const res = getUserLocalesFromBrowserLanguages(
        browser,
        supported,
        LOCALE_KEY.EnUs,
      );
      expect(res).to.deep.equal([
        LOCALE_KEY.Ar, // base chosen
        LOCALE_KEY.FrCa, // exact supported
        LOCALE_KEY.EnUs, // exact supported
      ]);
    });

    it('falls back to default when nothing matches', () => {
      const res = getUserLocalesFromBrowserLanguages(
        ['xx-YY'],
        [LOCALE_KEY.FrFr],
        LOCALE_KEY.EnUs,
      );
      expect(res).to.deep.equal([LOCALE_KEY.EnUs]);
    });

    it('short beats variant if both are supported', () => {
      const supported = [LOCALE_KEY.ArAe, LOCALE_KEY.Ar];
      const res = getUserLocalesFromBrowserLanguages(
        ['ar-OM'],
        supported,
        LOCALE_KEY.EnUs,
      );
      expect(res[0]).to.equal(LOCALE_KEY.Ar);
    });
  });

  describe('getNearestSupportedLocale', () => {
    it('returns first preferred supported locale', () => {
      const preferred = [LOCALE_KEY.FrCa, LOCALE_KEY.EnGb];
      const supported = [LOCALE_KEY.EnUs, LOCALE_KEY.FrCa];
      expect(getNearestSupportedLocale(preferred, supported)).to.equal(
        LOCALE_KEY.FrCa,
      );
    });

    it('returns undefined when no match exists', () => {
      const preferred = [LOCALE_KEY.EsEs];
      const supported = [LOCALE_KEY.EnUs];
      expect(getNearestSupportedLocale(preferred, supported)).to.equal(
        undefined,
      );
    });
  });

  describe('sortSupportedLocalesByPreference', () => {
    it('ranks exact > base-only > original order (stable)', () => {
      const languages = [
        LOCALE_KEY.EnGb,
        LOCALE_KEY.FrFr,
        LOCALE_KEY.FrCa,
        LOCALE_KEY.EnUs,
      ] as LocaleValue[];

      const preferred = [LOCALE_KEY.FrCa, LOCALE_KEY.En]; // exact fr-CA first, then any en-*

      const sorted = sortSupportedLocalesByPreference(languages, preferred);

      expect(sorted).to.deep.equal([
        LOCALE_KEY.FrCa,
        LOCALE_KEY.FrFr,
        LOCALE_KEY.EnGb,
        LOCALE_KEY.EnUs,
      ]);
    });

    it('preserves original order for non-matching locales', () => {
      const languages = [LOCALE_KEY.EsEs, LOCALE_KEY.FrFr, LOCALE_KEY.EnUs];
      const preferred: LocaleValue[] = [LOCALE_KEY.ZhCn];
      const sorted = sortSupportedLocalesByPreference(languages, preferred);
      expect(sorted).to.deep.equal(languages);
    });
  });

  describe('pickDefaultLanguage', () => {
    it('tries same-prefix (zh or any zh-*) before fallback', () => {
      const supported = [LOCALE_KEY.FrFr, LOCALE_KEY.ZhHk, LOCALE_KEY.EnUs];
      const picked = pickDefaultLanguage(supported, ['zh-HK'], LOCALE_KEY.EnUs);
      expect(picked).to.equal(LOCALE_KEY.ZhHk);
    });

    it('falls back when no supported match exists (explicit test requested)', () => {
      const supported = [LOCALE_KEY.FrFr];
      const picked = pickDefaultLanguage(supported, ['zh-HK'], LOCALE_KEY.EnUs);
      expect(picked).to.equal(LOCALE_KEY.EnUs);
    });

    it('respects browser order across multiple tags', () => {
      const supported = [LOCALE_KEY.FrFr, LOCALE_KEY.EnGb, LOCALE_KEY.EnUs];
      const picked = pickDefaultLanguage(
        supported,
        ['es-MX', 'en-GB', 'en-US'],
        LOCALE_KEY.FrFr,
      );
      expect(picked).to.equal(LOCALE_KEY.EnGb);
    });
  });

  describe('orderCustomerLocalesForDisplay', () => {
    it('reorders customer list by user preference using the prefix rule', () => {
      const customer = [
        LOCALE_KEY.FrFr,
        LOCALE_KEY.EnUs,
        LOCALE_KEY.ArAe,
        LOCALE_KEY.FrCa,
      ];
      const browser = ['fr-CA', 'ar-EG', 'en-US'];

      const ordered = orderCustomerLocalesForDisplay(
        customer,
        browser,
        LOCALE_KEY.EnUs,
      );

      // fr-CA exact first, then first ar-* variant present, then en-US exact, then leftover fr-FR
      expect(ordered.slice(0, 3)).to.deep.equal([
        LOCALE_KEY.FrCa,
        LOCALE_KEY.ArAe,
        LOCALE_KEY.EnUs,
      ]);
      expect(ordered[3]).to.equal(LOCALE_KEY.FrFr);
    });

    it('handles no matches by keeping original order (fallback not in list)', () => {
      const customer = [LOCALE_KEY.FrFr, LOCALE_KEY.EnUs];
      const browser = ['xx-YY'];
      const ordered = orderCustomerLocalesForDisplay(
        customer,
        browser,
        LOCALE_KEY.ZhCn, // fallback NOT in customer list, so order should remain intact
      );
      expect(ordered).to.deep.equal(customer);
    });
  });

  //
  // Smoke test using the full supported set to ensure we don’t throw on large inputs.
  //
  describe('integration smoke against CONSENT_MANAGER_SUPPORTED_LOCALES', () => {
    it('does not throw and returns something sensible', () => {
      const browser = ['ES-mx', 'Fr-ca', 'en-GB', 'zh-HK'];
      const result = getUserLocalesFromBrowserLanguages(
        browser,
        SUPPORTED_ALL,
        LOCALE_KEY.EnUs,
      );
      expect(result.length).to.be.greaterThan(0);
      expect(
        result.some(
          (l) =>
            l === LOCALE_KEY.EsMx ||
            l === LOCALE_KEY.EsEs || // base fallback
            l === LOCALE_KEY.FrCa ||
            l === LOCALE_KEY.Fr || // base fallback
            l === LOCALE_KEY.EnGb ||
            l === LOCALE_KEY.EnUs ||
            l === LOCALE_KEY.ZhHk ||
            l === LOCALE_KEY.ZhCn, // base fallback
        ),
      ).to.equal(true);
    });
  });
});
