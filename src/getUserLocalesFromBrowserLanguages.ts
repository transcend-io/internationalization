import {
  LocaleValue,
  BrowserLocaleKey,
  LOCALE_BROWSER_MAP_LOWERCASE,
} from './enums';

/**
 * Normalize a BCP-47 browser language tag to lowercase.
 *
 * @param tag - Raw browser language tag (e.g., 'en-US')
 * @returns Lowercased tag (e.g., 'en-us')
 */
function normalizeBrowserTag(tag: string): string {
  return tag.trim().toLowerCase();
}

/**
 * Extract the base language sub-tag from a BCP-47 tag or LocaleValue.
 *
 * @param code - A tag or LocaleValue (e.g., 'fr-CA' or 'fr')
 * @returns Base language (e.g., 'fr')
 */
function baseOf(code: string): string {
  return code.split('-')[0];
}

/**
 * Return a de-duplicated array preserving first-seen order.
 *
 * @param items - Input items
 * @returns Unique items in original order
 */
function uniqOrdered<T>(items: T[]): T[] {
  const out: T[] = [];
  const seen = new Set<T>();
  // eslint-disable-next-line no-restricted-syntax
  for (const x of items) {
    if (!seen.has(x)) {
      seen.add(x);
      out.push(x);
    }
  }
  return out;
}

/**
 * Detect user-preferred languages from the navigator.
 * We only trim; keys in LOCALE_BROWSER_MAP can be mixed case, and resolution is case-insensitive.
 *
 * @param languages - navigator.languages
 * @param language - navigator.language
 * @returns Ordered list of BCP-47 tags (strings)
 */
export function getLanguagesFromNavigator(
  languages = navigator.languages,
  language = navigator.language,
): BrowserLocaleKey[] {
  const tags = languages?.length ? languages : [language];
  return tags.map((t) => t.trim()).filter((x) => !!x) as BrowserLocaleKey[];
}

/**
 * Map an ordered list of browser tags to supported LocaleValues using the resolve rule.
 * De-duplicates and preserves order, but prioritizes **exact LOCALE_BROWSER_MAP hits**
 * over fuzzy/base matches across the whole list.
 *
 * @param browserLocales - Browser tags (ordered by user preference)
 * @param supportedLocales - Allowed locales (customer-ordered)
 * @param defaultLocale - Fallback when nothing matches (defaults to 'en')
 * @returns Ordered, unique supported LocaleValues with exact hits first
 */
export function getUserLocalesFromBrowserLanguages(
  browserLocales: string[],
  supportedLocales: LocaleValue[],
  defaultLocale: LocaleValue,
): LocaleValue[] {
  const supportedSet = new Set(supportedLocales);

  const exact: LocaleValue[] = [];
  const fuzzy: LocaleValue[] = [];

  // eslint-disable-next-line no-restricted-syntax
  for (const tag of browserLocales) {
    const lc = normalizeBrowserTag(tag);

    // 1) Exact LOCALE_BROWSER_MAP match (case-insensitive)
    const direct = LOCALE_BROWSER_MAP_LOWERCASE[lc];
    if (direct && supportedSet.has(direct)) {
      exact.push(direct);
      // eslint-disable-next-line no-continue
      continue;
    }

    // 2) Fuzzy prefix rule against *supportedLocales*:
    const prefix = baseOf(lc);

    // 2a) short/base code if supported
    const short = supportedLocales.find((l) => l.toLowerCase() === prefix);
    if (short) {
      fuzzy.push(short);
      // eslint-disable-next-line no-continue
      continue;
    }

    // 2b) otherwise first variant of same base in customer order
    const variant = supportedLocales.find(
      (l) => l.includes('-') && baseOf(l).toLowerCase() === prefix,
    );
    if (variant) {
      fuzzy.push(variant);
    }
  }

  // Exact hits outrank any fuzzy/base matches globally
  const ordered = uniqOrdered<LocaleValue>([...exact, ...fuzzy]);
  return ordered.length ? ordered : [defaultLocale];
}

/**
 * Return the first preferred locale that is supported.
 * Pure membership check—no external equivalence.
 *
 * @param preferred - Candidate locales in descending preference
 * @param supported - Allowed locales
 * @returns First supported locale or undefined
 */
export function getNearestSupportedLocale(
  preferred: LocaleValue[],
  supported: LocaleValue[],
): LocaleValue | undefined {
  const set = new Set(supported);
  // eslint-disable-next-line no-restricted-syntax
  for (const p of preferred) {
    if (set.has(p)) return p;
  }
  return undefined;
}

/**
 * Sort a provided list of locales by the user’s preferences.
 * Exact matches rank before base-only matches; otherwise original order is preserved.
 *
 * @param languages - Locales to sort (subset of supported)
 * @param userPreferredLocales - Preferred locales (e.g., output of getUserLocalesFromBrowserLanguages)
 * @returns languages sorted by preference (stable)
 */
export function sortSupportedLocalesByPreference<T extends LocaleValue>(
  languages: T[],
  userPreferredLocales: LocaleValue[],
): T[] {
  const exactOrder = new Map<LocaleValue, number>();
  userPreferredLocales.forEach((v, i) => exactOrder.set(v, i));

  const baseOrder = new Map<string, number>();
  uniqOrdered(userPreferredLocales.map((v) => baseOf(v).toLowerCase())).forEach(
    (b, i) => baseOrder.set(b, i),
  );

  const score = (l: T): number => {
    const exact = exactOrder.get(l);
    if (exact !== undefined) return exact;
    const bIdx = baseOrder.get(baseOf(l).toLowerCase());
    if (bIdx !== undefined) return 1000 + bIdx;
    return Number.POSITIVE_INFINITY;
  };

  return [...languages].sort((a, b) => score(a) - score(b));
}

/**
 * Compute the single default language for the user using browser order.
 * This will try base prefix matches (e.g., 'zh' or any 'zh-*') among supported
 * before falling back to the provided fallback.
 *
 * @param supportedLocales - Allowed locales (customer-ordered)
 * @param browserLocales - Browser tags (ordered by user preference)
 * @param fallback - Fallback locale (defaults to 'en')
 * @returns Chosen LocaleValue
 */
export function pickDefaultLanguage(
  supportedLocales: LocaleValue[],
  browserLocales: string[],
  fallback: LocaleValue,
): LocaleValue {
  const preferred = getUserLocalesFromBrowserLanguages(
    browserLocales,
    supportedLocales,
    fallback,
  );
  return getNearestSupportedLocale(preferred, supportedLocales) ?? fallback;
}

/**
 * Given a customer-configured, ordered list of allowed locales, return that same list
 * re-ordered by the user’s browser preferences using the prefix rule.
 *
 * @param customerLocales - Allowed locales in display/config order
 * @param browserLocales - Browser tags (e.g., from getLanguagesFromNavigator())
 * @param fallback - Fallback when no signal matches
 * @returns customerLocales sorted by user preference
 */
export function orderCustomerLocalesForDisplay(
  customerLocales: LocaleValue[],
  browserLocales: string[],
  fallback: LocaleValue,
): LocaleValue[] {
  const preferred = getUserLocalesFromBrowserLanguages(
    browserLocales,
    customerLocales,
    fallback,
  );
  return sortSupportedLocalesByPreference(customerLocales, preferred);
}
