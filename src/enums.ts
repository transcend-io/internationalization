/* eslint-disable max-lines */
// TODO: Remove old object here once dependencies are switched to LOCALE_KEY
/**
 * The language identifier keys
 *
 * @see https://en.wikipedia.org/wiki/List-of-ISO-639-1-codes
 */
export enum LanguageKey {
  /** English */
  En = 'en',
  /** Arabic */
  Ar = 'ar',
  /** French */
  Fr = 'fr',
  /** Spanish */
  Es = 'es',
  /** German */
  De = 'de',
  /** Italian */
  It = 'it',
  /** Japanese */
  Ja = 'ja',
  /** Russian */
  Ru = 'ru',

  /** Arabic UAE */
  ArAe = 'ar-AE',
  /** French */
  FrFr = 'fr-FR',
  /** German */
  DeDe = 'de-DE',
  /** Austrian German */
  DeAt = 'de-AT',
  /** Swiss German */
  DeCh = 'de-CH',
  /** Italian */
  ItIt = 'it-IT',
  /** Swiss Italian */
  ItCh = 'it-CH',
  /** Afrikaans */
  AfZz = 'af-ZA',
  /** Bulgarian */
  BgBg = 'bg-BG',
  /** Chinese Simplified */
  ZhCn = 'zh-CN',
  /** Croatian */
  HrHr = 'hr-HR',
  /** Czech */
  CsCz = 'cs-CZ',
  /** Danish */
  DaDk = 'da-DK',
  /** English UK */
  EnGb = 'en-GB',
  /** English CA */
  EnCa = 'en-CA',
  /** English UAE */
  EnAe = 'en-AE', // TODO: this doesnt have a browser enum, will never get matched
  /** Finnish */
  FiFi = 'fi-FI',
  /** Greek */
  ElGr = 'el-GR',
  /** Hindi */
  HiIn = 'hi-IN',
  /** Hungarian */
  HuHu = 'hu-HU',
  /** Indonesian */
  IdId = 'id-ID',
  /** Japanese */
  JaJp = 'ja-JP',
  /** Korean */
  KoKr = 'ko-KR',
  /** Lithuanian */
  LtLt = 'lt-LT',
  /** Malay */
  MsMy = 'ms-MY',
  /** Marathi */
  MrIn = 'mr-IN',
  /** Norwegian Bokmål */
  NbNi = 'nb-NO',
  /** Polish */
  PlPl = 'pl-PL',
  /** Portuguese (Brazil) */
  PtBr = 'pt-BR',
  /** Portuguese (Portugal) */
  PtPt = 'pt-PT',
  /** Romanian */
  RoRo = 'ro-RO',
  /** Russian */
  RuRu = 'ru-RU',
  /** Serbian (Latin) */
  SrLatnRs = 'sr-Latn-RS',
  /** Swedish */
  SvSe = 'sv-SE',
  /** Tamil */
  TaIn = 'ta-IN',
  /** Thai */
  ThTh = 'th-TH',
  /** Turkish */
  TrTr = 'tr-TR',
  /** Ukrainian */
  UkUa = 'uk-UA',
  /** Vietnamese */
  ViVn = 'vi-VN',
  /** Zulu */
  ZuZa = 'zu-ZA',
  /** USA */
  EnUs = 'en-US',
  /** Australia */
  EnAu = 'en-AU',
  /** Belgium */
  FrBe = 'fr-BE',
  /** Quebec */
  FrCa = 'fr-CA',
  /** French (Switzerland) */
  FrCh = 'fr-CH',
  /** Ireland */
  EnIe = 'en-IE',
  /** Dutch */
  NlNl = 'nl-NL',
  /** Dutch (Belgium) */
  NlBe = 'nl-BE',
  /** Spanish (Castellano) */
  EsEs = 'es-ES',
  /** Spanish (Latin America & Caribbean) */
  Es419 = 'es-419',
  /** Chinese (Traditional) */
  ZhHk = 'zh-HK',
  /** Hebrew (Israel) */
  HeIl = 'he-IL',
  /** English (New Zealand) */
  EnNz = 'en-NZ',
  /** Estonian (Estonia) */
  EtEe = 'et-EE',
  /** Icelandic (Iceland) */
  IsIs = 'is-IS',
  /** Latvian (Latvia) */
  LvLv = 'lv-LV',
  /** Maltese (Malta) */
  MtMt = 'mt-MT',
  /** Slovak (Slovakia) */
  SkSk = 'sk-SK',
  /** Slovenian (Slovenia) */
  SlSl = 'sl-SL',
}

/**
 * The locale identifier keys
 *
 * @see https://en.wikipedia.org/wiki/List-of-ISO-639-1-codes
 */
export const LOCALE_KEY = {
  /** English */
  En: 'en',
  /** Arabic */
  Ar: 'ar',
  /** French */
  Fr: 'fr',
  /** Spanish */
  Es: 'es',
  /** German */
  De: 'de',
  /** Italian */
  It: 'it',
  /** Japanese */
  Ja: 'ja',
  /** Russian */
  Ru: 'ru',

  /** Arabic UAE */
  ArAe: 'ar-AE',
  /** French */
  FrFr: 'fr-FR',
  /** German */
  DeDe: 'de-DE',
  /** Austrian German */
  DeAt: 'de-AT',
  /** Swiss German */
  DeCh: 'de-CH',
  /** Italian */
  ItIt: 'it-IT',
  /** Swiss Italian */
  ItCh: 'it-CH',
  /** Afrikaans */
  AfZz: 'af-ZA',
  /** Bulgarian */
  BgBg: 'bg-BG',
  /** Chinese Simplified */
  ZhCn: 'zh-CN',
  /** Croatian */
  HrHr: 'hr-HR',
  /** Czech */
  CsCz: 'cs-CZ',
  /** Danish */
  DaDk: 'da-DK',
  /** English UK */
  EnGb: 'en-GB',
  /** English CA */
  EnCa: 'en-CA',
  /** English UAE */
  EnAe: 'en-AE',
  /** Finnish */
  FiFi: 'fi-FI',
  /** Greek */
  ElGr: 'el-GR',
  /** Hindi */
  HiIn: 'hi-IN',
  /** Hungarian */
  HuHu: 'hu-HU',
  /** Indonesian */
  IdId: 'id-ID',
  /** Japanese */
  JaJp: 'ja-JP',
  /** Korean */
  KoKr: 'ko-KR',
  /** Lithuanian */
  LtLt: 'lt-LT',
  /** Malay */
  MsMy: 'ms-MY',
  /** Marathi */
  MrIn: 'mr-IN',
  /** Norwegian Bokmål */
  NbNi: 'nb-NO',
  /** Polish */
  PlPl: 'pl-PL',
  /** Portuguese (Brazil) */
  PtBr: 'pt-BR',
  /** Portuguese (Portugal) */
  PtPt: 'pt-PT',
  /** Romanian */
  RoRo: 'ro-RO',
  /** Russian */
  RuRu: 'ru-RU',
  /** Serbian (Latin) */
  SrLatnRs: 'sr-Latn-RS',
  /** Swedish */
  SvSe: 'sv-SE',
  /** Tamil */
  TaIn: 'ta-IN',
  /** Thai */
  ThTh: 'th-TH',
  /** Turkish */
  TrTr: 'tr-TR',
  /** Ukrainian */
  UkUa: 'uk-UA',
  /** Vietnamese */
  ViVn: 'vi-VN',
  /** Zulu */
  ZuZa: 'zu-ZA',
  /** USA */
  EnUs: 'en-US',
  /** Australia */
  EnAu: 'en-AU',
  /** Belgium */
  FrBe: 'fr-BE',
  /** Quebec */
  FrCa: 'fr-CA',
  /** French (Switzerland) */
  FrCh: 'fr-CH',
  /** Ireland */
  EnIe: 'en-IE',
  /** Dutch */
  NlNl: 'nl-NL',
  /** Dutch (Belgium) */
  NlBe: 'nl-BE',
  /** Spanish (Castellano) */
  EsEs: 'es-ES',
  /** Spanish (Latin America & Caribbean) */
  Es419: 'es-419',
  /** Chinese (Traditional) */
  ZhHk: 'zh-HK',
  /** Hebrew (Israel) */
  HeIl: 'he-IL',
  /** English (New Zealand) */
  EnNz: 'en-NZ',
  /** Estonian (Estonia) */
  EtEe: 'et-EE',
  /** Icelandic (Iceland) */
  IsIs: 'is-IS',
  /** Latvian (Latvia) */
  LvLv: 'lv-LV',
  /** Maltese (Malta) */
  MtMt: 'mt-MT',
  /** Slovak (Slovakia) */
  SkSk: 'sk-SK',
  /** Slovenian (Slovenia) */
  SlSl: 'sl-SL',
} as const;

/** Union of all locale keys */
export type LocaleKey = keyof typeof LOCALE_KEY;
/** Union of all locale enum values */
export type LocaleValue = (typeof LOCALE_KEY)[LocaleKey];

/**
 * List of AWS supported translations, see: https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html#what-is-languages-supported
 */
export const AWS_SUPPORTED_TRANSLATIONS = {
  Afrikaans: 'af',
  Albanian: 'sq',
  Amharic: 'am',
  Arabic: 'ar',
  Armenian: 'hy',
  Azerbaijani: 'az',
  Bengali: 'bn',
  Bosnian: 'bs',
  Bulgarian: 'bg',
  Catalan: 'ca',
  ChineseSimplified: 'zh',
  ChineseTraditional: 'zh-TW',
  Croatian: 'hr',
  Czech: 'cs',
  Danish: 'da',
  Dari: 'fa-AF',
  Dutch: 'nl',
  English: 'en',
  Estonian: 'et',
  Farsi: 'fa',
  Tagalog: 'tl',
  Finnish: 'fi',
  French: 'fr',
  FrenchCanada: 'fr-CA',
  Georgian: 'ka',
  German: 'de',
  Greek: 'el',
  Gujarati: 'gu',
  HaitianCreole: 'ht',
  Hausa: 'ha',
  Hebrew: 'he',
  Hindi: 'hi',
  Hungarian: 'hu',
  Icelandic: 'is',
  Indonesian: 'id',
  Irish: 'ga',
  Italian: 'it',
  Japanese: 'ja',
  Kannada: 'kn',
  Kazakh: 'kk',
  Korean: 'ko',
  Latvian: 'lv',
  Lithuanian: 'lt',
  Macedonian: 'mk',
  Malay: 'ms',
  Malayalam: 'ml',
  Maltese: 'mt',
  Marathi: 'mr',
  Mongolian: 'mn',
  Norwegian: 'no',
  Pashto: 'ps',
  Polish: 'pl',
  PortugueseBrazil: 'pt',
  PortuguesePortugal: 'pt-PT',
  Punjabi: 'pa',
  Romanian: 'ro',
  Russian: 'ru',
  Serbian: 'sr', // double check if this is latin or cyrillic
  Sinhala: 'si',
  Slovak: 'sk',
  Slovenian: 'sl',
  Somali: 'so',
  Spanish: 'es',
  SpanishMexico: 'es-MX',
  Swahili: 'sw',
  Swedish: 'sv',
  Tamil: 'ta',
  Telugu: 'te',
  Thai: 'th',
  Turkish: 'tr',
  Ukrainian: 'uk',
  Urdu: 'ur',
  Uzbek: 'uz',
  Vietnamese: 'vi',
  Welsh: 'cy',
} as const;

/** Union of all AWS translation keys  */
export type AwsTranslationKey = keyof typeof AWS_SUPPORTED_TRANSLATIONS;
/** Union of all AWS translation enum values */
export type AwsTranslationValue =
  (typeof AWS_SUPPORTED_TRANSLATIONS)[AwsTranslationKey];

/** These are the languages we could translate with AWS but don't currently */
const TRANSCEND_UNSUPPORTED_TRANSLATIONS = [
  'Albanian',
  'Amharic',
  'Armenian',
  'Azerbaijani',
  'Bengali',
  'Bosnian',
  'Catalan',
  'Dari',
  'Tagalog',
  // 'FrenchCanada', originally not supported but im fixing this
  'Georgian',
  'Gujarati',
  'HaitianCreole',
  'Hausa',
  'Irish',
  'Kannada',
  'Kazakh',
  'Macedonian',
  'Malayalam',
  'Mongolian',
  'Pashto',
  'Punjabi',
  'Sinhala',
  'Somali',
  'Swahili',
  'Telugu',
  'Urdu',
  'Uzbek',
  'Welsh',
] as const satisfies readonly AwsTranslationKey[];

/** Union of Transcend unsupported language keys */
export type TranscendUnsupportedTranslationKey =
  (typeof TRANSCEND_UNSUPPORTED_TRANSLATIONS)[number];
/** Union of Transcend unsupported language enum values */
export type TranscendUnsupportedTranslationValue =
  (typeof AWS_SUPPORTED_TRANSLATIONS)[TranscendUnsupportedTranslationKey];

/** Union of Transcend supported language keys */
export type TranscendSupportedTranslationKey = Exclude<
  AwsTranslationKey,
  TranscendUnsupportedTranslationKey
>;
/** Union of Transcend supported language enum values */
export type TranscendSupportedTranslationValue = Exclude<
  AwsTranslationValue,
  TranscendUnsupportedTranslationValue
>;

export const TRANSCEND_SUPPORTED_TRANSLATIONS = Object.fromEntries(
  Object.entries(AWS_SUPPORTED_TRANSLATIONS).filter(
    ([, val]) => !(val in TRANSCEND_UNSUPPORTED_TRANSLATIONS),
  ),
) as Pick<typeof AWS_SUPPORTED_TRANSLATIONS, TranscendSupportedTranslationKey>;

/**
 * TODO:
 * We currently have a "duplicated" locale for base lang -> base lang - base region.
 * Do we want to exclude "German - Germany" and just have "Germany"?
 */

/** Mapping of Locale to AWS Translation */
export const LOCALE_TRANSLATION_MAP = {
  [LOCALE_KEY.En]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.Ar]: TRANSCEND_SUPPORTED_TRANSLATIONS.Arabic,
  [LOCALE_KEY.Fr]: TRANSCEND_SUPPORTED_TRANSLATIONS.French,
  [LOCALE_KEY.Es]: TRANSCEND_SUPPORTED_TRANSLATIONS.Spanish,
  [LOCALE_KEY.De]: TRANSCEND_SUPPORTED_TRANSLATIONS.German,
  [LOCALE_KEY.It]: TRANSCEND_SUPPORTED_TRANSLATIONS.Italian,
  [LOCALE_KEY.Ja]: TRANSCEND_SUPPORTED_TRANSLATIONS.Japanese,
  [LOCALE_KEY.Ru]: TRANSCEND_SUPPORTED_TRANSLATIONS.Russian,
  [LOCALE_KEY.ArAe]: TRANSCEND_SUPPORTED_TRANSLATIONS.Arabic,
  [LOCALE_KEY.FrFr]: TRANSCEND_SUPPORTED_TRANSLATIONS.French,
  [LOCALE_KEY.DeDe]: TRANSCEND_SUPPORTED_TRANSLATIONS.German,
  [LOCALE_KEY.DeAt]: TRANSCEND_SUPPORTED_TRANSLATIONS.German,
  [LOCALE_KEY.DeCh]: TRANSCEND_SUPPORTED_TRANSLATIONS.German,
  [LOCALE_KEY.ItIt]: TRANSCEND_SUPPORTED_TRANSLATIONS.Italian,
  [LOCALE_KEY.ItCh]: TRANSCEND_SUPPORTED_TRANSLATIONS.Italian,
  [LOCALE_KEY.AfZz]: TRANSCEND_SUPPORTED_TRANSLATIONS.Afrikaans,
  [LOCALE_KEY.BgBg]: TRANSCEND_SUPPORTED_TRANSLATIONS.Bulgarian,
  [LOCALE_KEY.ZhCn]: TRANSCEND_SUPPORTED_TRANSLATIONS.ChineseSimplified,
  [LOCALE_KEY.HrHr]: TRANSCEND_SUPPORTED_TRANSLATIONS.Croatian,
  [LOCALE_KEY.CsCz]: TRANSCEND_SUPPORTED_TRANSLATIONS.Czech,
  [LOCALE_KEY.DaDk]: TRANSCEND_SUPPORTED_TRANSLATIONS.Danish,
  [LOCALE_KEY.EnGb]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.EnCa]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.EnAe]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.FiFi]: TRANSCEND_SUPPORTED_TRANSLATIONS.Finnish,
  [LOCALE_KEY.ElGr]: TRANSCEND_SUPPORTED_TRANSLATIONS.Greek,
  [LOCALE_KEY.HiIn]: TRANSCEND_SUPPORTED_TRANSLATIONS.Hindi,
  [LOCALE_KEY.HuHu]: TRANSCEND_SUPPORTED_TRANSLATIONS.Hungarian,
  [LOCALE_KEY.IdId]: TRANSCEND_SUPPORTED_TRANSLATIONS.Indonesian,
  [LOCALE_KEY.JaJp]: TRANSCEND_SUPPORTED_TRANSLATIONS.Japanese,
  [LOCALE_KEY.KoKr]: TRANSCEND_SUPPORTED_TRANSLATIONS.Korean,
  [LOCALE_KEY.LtLt]: TRANSCEND_SUPPORTED_TRANSLATIONS.Lithuanian,
  [LOCALE_KEY.MsMy]: TRANSCEND_SUPPORTED_TRANSLATIONS.Malay,
  [LOCALE_KEY.MrIn]: TRANSCEND_SUPPORTED_TRANSLATIONS.Marathi,
  [LOCALE_KEY.NbNi]: TRANSCEND_SUPPORTED_TRANSLATIONS.Norwegian,
  [LOCALE_KEY.PlPl]: TRANSCEND_SUPPORTED_TRANSLATIONS.Polish,
  [LOCALE_KEY.PtBr]: TRANSCEND_SUPPORTED_TRANSLATIONS.PortugueseBrazil,
  [LOCALE_KEY.PtPt]: TRANSCEND_SUPPORTED_TRANSLATIONS.PortuguesePortugal,
  [LOCALE_KEY.RoRo]: TRANSCEND_SUPPORTED_TRANSLATIONS.Romanian,
  [LOCALE_KEY.RuRu]: TRANSCEND_SUPPORTED_TRANSLATIONS.Russian,
  [LOCALE_KEY.SrLatnRs]: TRANSCEND_SUPPORTED_TRANSLATIONS.Serbian,
  [LOCALE_KEY.SvSe]: TRANSCEND_SUPPORTED_TRANSLATIONS.Swedish,
  [LOCALE_KEY.TaIn]: TRANSCEND_SUPPORTED_TRANSLATIONS.Tamil,
  [LOCALE_KEY.ThTh]: TRANSCEND_SUPPORTED_TRANSLATIONS.Thai,
  [LOCALE_KEY.TrTr]: TRANSCEND_SUPPORTED_TRANSLATIONS.Turkish,
  [LOCALE_KEY.UkUa]: TRANSCEND_SUPPORTED_TRANSLATIONS.Ukrainian,
  [LOCALE_KEY.ViVn]: TRANSCEND_SUPPORTED_TRANSLATIONS.Vietnamese,
  [LOCALE_KEY.ZuZa]: TRANSCEND_SUPPORTED_TRANSLATIONS.English, // TODO: https://transcend.height.app/T-6386
  [LOCALE_KEY.EnUs]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.EnAu]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.FrBe]: TRANSCEND_SUPPORTED_TRANSLATIONS.French,
  [LOCALE_KEY.FrCa]: TRANSCEND_SUPPORTED_TRANSLATIONS.FrenchCanada,
  [LOCALE_KEY.FrCh]: TRANSCEND_SUPPORTED_TRANSLATIONS.French,
  [LOCALE_KEY.EnIe]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.NlNl]: TRANSCEND_SUPPORTED_TRANSLATIONS.Dutch,
  [LOCALE_KEY.NlBe]: TRANSCEND_SUPPORTED_TRANSLATIONS.Dutch,
  [LOCALE_KEY.EsEs]: TRANSCEND_SUPPORTED_TRANSLATIONS.Spanish,
  [LOCALE_KEY.Es419]: TRANSCEND_SUPPORTED_TRANSLATIONS.SpanishMexico,
  [LOCALE_KEY.ZhHk]: TRANSCEND_SUPPORTED_TRANSLATIONS.ChineseTraditional,
  [LOCALE_KEY.HeIl]: TRANSCEND_SUPPORTED_TRANSLATIONS.Hebrew,
  [LOCALE_KEY.EnNz]: TRANSCEND_SUPPORTED_TRANSLATIONS.English,
  [LOCALE_KEY.EtEe]: TRANSCEND_SUPPORTED_TRANSLATIONS.Estonian,
  [LOCALE_KEY.IsIs]: TRANSCEND_SUPPORTED_TRANSLATIONS.Icelandic,
  [LOCALE_KEY.LvLv]: TRANSCEND_SUPPORTED_TRANSLATIONS.Latvian,
  [LOCALE_KEY.MtMt]: TRANSCEND_SUPPORTED_TRANSLATIONS.Maltese,
  [LOCALE_KEY.SkSk]: TRANSCEND_SUPPORTED_TRANSLATIONS.Slovak,
  [LOCALE_KEY.SlSl]: TRANSCEND_SUPPORTED_TRANSLATIONS.Slovenian,
} as const satisfies {
  [k in LocaleValue]: TranscendSupportedTranslationValue; // TODO: allow this to not specify all locale keys
};

/** These are the languages we have an enum value for but do not populate in the CM UI */
const CONSENT_MANAGER_UNSUPPORTED_LOCALES = [
  'Ar',
  'Fr',
  'Es',
  'De',
  'It',
  'Ja',
  'Ru',
  'DeAt',
  'DeCh',
  'ItCh',
  'EnGb',
  'EnCa',
  'EnAe',
  'PtPt',
  'ZuZa',
  'EnUs',
  'EnAu',
  'FrBe',
  'FrCa',
  'FrCh',
  'EnIe',
  'NlBe',
  'EnNz',
  'EtEe',
  'LvLv',
  'MtMt',
  'SkSk',
  'SlSl',
] as const satisfies readonly LocaleKey[];

/** Union of Consent Manager unsupported locale keys */
export type ConsentManagerUnsupportedTranslationKey =
  (typeof CONSENT_MANAGER_UNSUPPORTED_LOCALES)[number];
/** Union of Consent Manager unsupported locale enum values */
export type ConsentManagerUnsupportedTranslationValue =
  (typeof LOCALE_KEY)[ConsentManagerUnsupportedTranslationKey];

/** Union of Consent Manager supported locale keys */
export type ConsentManagerSupportedTranslationKey = Exclude<
  LocaleKey,
  ConsentManagerUnsupportedTranslationKey
>;
/** Union of Consent Manager supported locale enum values */
export type ConsentManagerSupportedTranslationValue = Exclude<
  LocaleValue,
  ConsentManagerUnsupportedTranslationValue
>;

export const CONSENT_MANAGER_SUPPORTED_LOCALES = Object.fromEntries(
  Object.entries(LOCALE_KEY).filter(
    ([key]) => !(key in CONSENT_MANAGER_UNSUPPORTED_LOCALES),
  ),
) as Pick<typeof LOCALE_KEY, ConsentManagerSupportedTranslationKey>;

// TODO: Remove old object here once dependencies are switched to CONSENT_MANAGER_SUPPORTED_LOCALES
export const ConsentManagerLanguageKey = {
  En: LanguageKey.En,
  FrFr: LanguageKey.FrFr,
  DeDe: LanguageKey.DeDe,
  ItIt: LanguageKey.ItIt,
  PtBr: LanguageKey.PtBr,
  Es419: LanguageKey.Es419,
  EsEs: LanguageKey.EsEs,
  CsCz: LanguageKey.CsCz,
  DaDk: LanguageKey.DaDk,
  FiFi: LanguageKey.FiFi,
  ElGr: LanguageKey.ElGr,
  LtLt: LanguageKey.LtLt,
  NbNi: LanguageKey.NbNi,
  PlPl: LanguageKey.PlPl,
  RoRo: LanguageKey.RoRo,
  RuRu: LanguageKey.RuRu,
  SrLatnRs: LanguageKey.SrLatnRs,
  SvSe: LanguageKey.SvSe,
  ArAe: LanguageKey.ArAe,
  JaJp: LanguageKey.JaJp,
  KoKr: LanguageKey.KoKr,
  ZhCn: LanguageKey.ZhCn,
  ZhHk: LanguageKey.ZhHk,
  AfZz: LanguageKey.AfZz,
  BgBg: LanguageKey.BgBg,
  HrHr: LanguageKey.HrHr,
  HuHu: LanguageKey.HuHu,
  IdId: LanguageKey.IdId,
  MsMy: LanguageKey.MsMy,
  HiIn: LanguageKey.HiIn,
  MrIn: LanguageKey.MrIn,
  TaIn: LanguageKey.TaIn,
  ThTh: LanguageKey.ThTh,
  TrTr: LanguageKey.TrTr,
  UkUa: LanguageKey.UkUa,
  ViVn: LanguageKey.ViVn,
  NlNl: LanguageKey.NlNl,
  HeIl: LanguageKey.HeIl,
} as const;

/**
 * Override type
 */
export type ConsentManagerLanguageKey =
  (typeof ConsentManagerLanguageKey)[keyof typeof ConsentManagerLanguageKey];

/**
 * List of BCP 47 language codes, grabbed from https://www.localeplanet.com/icu/
 *
 * anything commented and marked TO-DO is for languages that AWS supports but we do not
 * all other comments are to leave in those browser codes in case AWS updates to support them
 */
export const LOCALE_BROWSER_MAP = {
  af: LOCALE_KEY.AfZz, // Afrikaans Afrikaans
  'af-NA': LOCALE_KEY.AfZz, // Afrikaans (Namibia) Afrikaans (Namibië)
  'af-ZA': LOCALE_KEY.AfZz, // Afrikaans (South Africa) Afrikaans (Suid-Afrika)
  // 'agq', // Aghem Aghem
  // 'agq-CM', // Aghem (Cameroon) Aghem (Kàmàlûŋ)
  // 'ak', // Akan Akan
  // 'ak-GH', // Akan (Ghana) Akan (Gaana)
  // 'am', // Amharic አማርኛ TODO
  // 'am-ET', // Amharic (Ethiopia) አማርኛ (ኢትዮጵያ) TODO
  ar: LOCALE_KEY.Ar, // Arabic العربية
  'ar-001': LOCALE_KEY.Ar, // Arabic (World) العربية (العالم) Modern Standard Arabic
  'ar-AE': LOCALE_KEY.ArAe, // Arabic (United Arab Emirates) العربية (الإمارات العربية المتحدة)
  'ar-BH': LOCALE_KEY.Ar, // Arabic (Bahrain) العربية (البحرين)
  'ar-DJ': LOCALE_KEY.Ar, // Arabic (Djibouti) العربية (جيبوتي)
  'ar-DZ': LOCALE_KEY.Ar, // Arabic (Algeria) العربية (الجزائر)
  'ar-EG': LOCALE_KEY.Ar, // Arabic (Egypt) العربية (مصر)
  'ar-EH': LOCALE_KEY.Ar, // Arabic (Western Sahara) العربية (الصحراء الغربية)
  'ar-ER': LOCALE_KEY.Ar, // Arabic (Eritrea) العربية (إريتريا)
  'ar-IL': LOCALE_KEY.Ar, // Arabic (Israel) العربية (إسرائيل)
  'ar-IQ': LOCALE_KEY.Ar, // Arabic (Iraq) العربية (العراق)
  'ar-JO': LOCALE_KEY.Ar, // Arabic (Jordan) العربية (الأردن)
  'ar-KM': LOCALE_KEY.Ar, // Arabic (Comoros) العربية (جزر القمر)
  'ar-KW': LOCALE_KEY.Ar, // Arabic (Kuwait) العربية (الكويت)
  'ar-LB': LOCALE_KEY.Ar, // Arabic (Lebanon) العربية (لبنان)
  'ar-LY': LOCALE_KEY.Ar, // Arabic (Libya) العربية (ليبيا)
  'ar-MA': LOCALE_KEY.Ar, // Arabic (Morocco) العربية (المغرب)
  'ar-MR': LOCALE_KEY.Ar, // Arabic (Mauritania) العربية (موريتانيا)
  'ar-OM': LOCALE_KEY.Ar, // Arabic (Oman) العربية (عُمان)
  'ar-PS': LOCALE_KEY.Ar, // Arabic (Palestinian Territories) العربية (الأراضي الفلسطينية)
  'ar-QA': LOCALE_KEY.Ar, // Arabic (Qatar) العربية (قطر)
  'ar-SA': LOCALE_KEY.Ar, // Arabic (Saudi Arabia) العربية (المملكة العربية السعودية)
  'ar-SD': LOCALE_KEY.Ar, // Arabic (Sudan) العربية (السودان)
  'ar-SO': LOCALE_KEY.Ar, // Arabic (Somalia) العربية (الصومال)
  'ar-SS': LOCALE_KEY.Ar, // Arabic (South Sudan) العربية (جنوب السودان)
  'ar-SY': LOCALE_KEY.Ar, // Arabic (Syria) العربية (سوريا)
  'ar-TD': LOCALE_KEY.Ar, // Arabic (Chad) العربية (تشاد)
  'ar-TN': LOCALE_KEY.Ar, // Arabic (Tunisia) العربية (تونس)
  'ar-YE': LOCALE_KEY.Ar, // Arabic (Yemen) العربية (اليمن)
  // 'as', // Assamese অসমীয়া
  // 'as-IN', // Assamese (India) অসমীয়া (ভারত)
  // 'asa', // Asu Kipare
  // 'asa-TZ', // Asu (Tanzania) Kipare (Tadhania)
  // 'ast', // Asturian asturianu
  // 'ast-ES', // Asturian (Spain) asturianu (España)
  // 'az', // Azerbaijani azərbaycan TODO
  // 'az-Cyrl', // Azerbaijani (Cyrillic) азәрбајҹан (Кирил) TODO
  // 'az-Cyrl-AZ', // Azerbaijani (Cyrillic, Azerbaijan) азәрбајҹан (Кирил, Азәрбајҹан) TODO
  // 'az-Latn', // Azerbaijani (Latin) azərbaycan (latın) TODO
  // 'az-Latn-AZ', // Azerbaijani (Latin, Azerbaijan) azərbaycan (latın, Azərbaycan) TODO
  // 'bas', // Basaa Ɓàsàa
  // 'bas-CM', // Basaa (Cameroon) Ɓàsàa (Kàmɛ̀rûn)
  // 'be', // Belarusian беларуская
  // 'be-BY', // Belarusian (Belarus) беларуская (Беларусь)
  // 'bem', // Bemba Ichibemba
  // 'bem-ZM', // Bemba (Zambia) Ichibemba (Zambia)
  // 'bez', // Bena Hibena
  // 'bez-TZ', // Bena (Tanzania) Hibena (Hutanzania)
  bg: LOCALE_KEY.BgBg, // Bulgarian български
  'bg-BG': LOCALE_KEY.BgBg, // Bulgarian (Bulgaria) български (България)
  // 'bm', // Bambara bamanakan
  // 'bm-ML', // Bambara (Mali) bamanakan (Mali)
  // 'bn', // Bangla বাংলা
  // 'bn-BD', // Bangla (Bangladesh) বাংলা (বাংলাদেশ)
  // 'bn-IN', // Bangla (India) বাংলা (ভারত)
  // 'bo', // Tibetan བོད་སྐད་
  // 'bo-CN', // Tibetan (China) བོད་སྐད་ (རྒྱ་ནག)
  // 'bo-IN', // Tibetan (India) བོད་སྐད་ (རྒྱ་གར་)
  // 'br', // Breton brezhoneg
  // 'br-FR', // Breton (France) brezhoneg (Frañs)
  // 'brx', // Bodo बड़ो
  // 'brx-IN', // Bodo (India) बड़ो (भारत)
  // 'bs', // Bosnian bosanski TODO
  // 'bs-Cyrl', // Bosnian (Cyrillic) босански (ћирилица) TODO
  // 'bs-Cyrl-BA', // Bosnian (Cyrillic, Bosnia & Herzegovina) босански (ћирилица, Босна и Херцеговина) TODO
  // 'bs-Latn', // Bosnian (Latin) bosanski (latinica) TODO
  // 'bs-Latn-BA', // Bosnian (Latin, Bosnia & Herzegovina) bosanski (latinica, Bosna i Hercegovina) TODO
  // 'ca', // Catalan català TODO
  // 'ca-AD', // Catalan (Andorra) català (Andorra) TODO
  // 'ca-ES', // Catalan (Spain) català (Espanya) TODO
  // 'ca-FR', // Catalan (France) català (França) TODO
  // 'ca-IT', // Catalan (Italy) català (Itàlia) TODO
  // 'ccp', // Chakma 𑄌𑄋𑄴𑄟𑄳𑄦
  // 'ccp-BD', // Chakma (Bangladesh) 𑄌𑄋𑄴𑄟𑄳𑄦 (𑄝𑄁𑄣𑄘𑄬𑄌𑄴)
  // 'ccp-IN', // Chakma (India) 𑄌𑄋𑄴𑄟𑄳𑄦 (𑄞𑄢𑄧𑄖𑄴)
  // 'ce', // Chechen нохчийн
  // 'ce-RU', // Chechen (Russia) нохчийн (Росси)
  // 'cgg', // Chiga Rukiga
  // 'cgg-UG', // Chiga (Uganda) Rukiga (Uganda)
  // 'chr', // Cherokee ᏣᎳᎩ
  // 'chr-US', // Cherokee (United States) ᏣᎳᎩ (ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᏍᎦᏚᎩ)
  // 'ckb', // Central Kurdish کوردیی ناوەندی
  // 'ckb-IQ', // Central Kurdish (Iraq) کوردیی ناوەندی (عێراق)
  // 'ckb-IR', // Central Kurdish (Iran) کوردیی ناوەندی (ئێران)
  cs: LOCALE_KEY.CsCz, // Czech čeština
  'cs-CZ': LOCALE_KEY.CsCz, // Czech (Czechia) čeština (Česko)
  // 'cy', // Welsh Cymraeg TODO
  // 'cy-GB', // Welsh (United Kingdom) Cymraeg (Y Deyrnas Unedig) TODO
  da: LOCALE_KEY.DaDk, // Danish dansk
  'da-DK': LOCALE_KEY.DaDk, // Danish (Denmark) dansk (Danmark)
  'da-GL': LOCALE_KEY.DaDk, // Danish (Greenland) dansk (Grønland)
  // 'dav', // Taita Kitaita
  // 'dav-KE', // Taita (Kenya) Kitaita (Kenya)
  de: LOCALE_KEY.De, // German Deutsch
  'de-AT': LOCALE_KEY.DeAt, // German (Austria) Deutsch (Österreich) Austrian German
  'de-BE': LOCALE_KEY.De, // German (Belgium) Deutsch (Belgien)
  'de-CH': LOCALE_KEY.DeCh, // German (Switzerland) Deutsch (Schweiz) Swiss High German
  'de-DE': LOCALE_KEY.DeDe, // German (Germany) Deutsch (Deutschland)
  'de-IT': LOCALE_KEY.De, // German (Italy) Deutsch (Italien)
  'de-LI': LOCALE_KEY.De, // German (Liechtenstein) Deutsch (Liechtenstein)
  'de-LU': LOCALE_KEY.De, // German (Luxembourg) Deutsch (Luxemburg)
  // 'dje', // Zarma Zarmaciine
  // 'dje-NE', // Zarma (Niger) Zarmaciine (Nižer)
  // 'dsb', // Lower Sorbian dolnoserbšćina
  // 'dsb-DE', // Lower Sorbian (Germany) dolnoserbšćina (Nimska)
  // 'dua', // Duala duálá
  // 'dua-CM', // Duala (Cameroon) duálá (Cameroun)
  // 'dyo', // Jola-Fonyi joola
  // 'dyo-SN', // Jola-Fonyi (Senegal) joola (Senegal)
  // 'dz', // Dzongkha རྫོང་ཁ
  // 'dz-BT', // Dzongkha (Bhutan) རྫོང་ཁ། (འབྲུག།)
  // 'ebu', // Embu Kĩembu
  // 'ebu-KE', // Embu (Kenya) Kĩembu (Kenya)
  // 'ee', // Ewe Eʋegbe
  // 'ee-GH', // Ewe (Ghana) Eʋegbe (Ghana nutome)
  // 'ee-TG', // Ewe (Togo) Eʋegbe (Togo nutome)
  el: LOCALE_KEY.ElGr, // Greek Ελληνικά
  'el-CY': LOCALE_KEY.ElGr, // Greek (Cyprus) Ελληνικά (Κύπρος)
  'el-GR': LOCALE_KEY.ElGr, // Greek (Greece) Ελληνικά (Ελλάδα)
  en: LOCALE_KEY.En, // English English
  'en-001': LOCALE_KEY.En, // English (World) English (World)
  'en-150': LOCALE_KEY.En, // English (Europe) English (Europe)
  'en-AG': LOCALE_KEY.En, // English (Antigua & Barbuda) English (Antigua & Barbuda)
  'en-AI': LOCALE_KEY.En, // English (Anguilla) English (Anguilla)
  'en-AS': LOCALE_KEY.En, // English (American Samoa) English (American Samoa)
  'en-AT': LOCALE_KEY.En, // English (Austria) English (Austria)
  'en-AU': LOCALE_KEY.EnAu, // English (Australia) English (Australia) Australian English
  'en-BB': LOCALE_KEY.En, // English (Barbados) English (Barbados)
  'en-BE': LOCALE_KEY.En, // English (Belgium) English (Belgium)
  'en-BI': LOCALE_KEY.En, // English (Burundi) English (Burundi)
  'en-BM': LOCALE_KEY.En, // English (Bermuda) English (Bermuda)
  'en-BS': LOCALE_KEY.En, // English (Bahamas) English (Bahamas)
  'en-BW': LOCALE_KEY.En, // English (Botswana) English (Botswana)
  'en-BZ': LOCALE_KEY.En, // English (Belize) English (Belize)
  'en-CA': LOCALE_KEY.En, // English (Canada) English (Canada) Canadian English
  'en-CC': LOCALE_KEY.En, // English (Cocos [Keeling] Islands) English (Cocos [Keeling] Islands)
  'en-CH': LOCALE_KEY.En, // English (Switzerland) English (Switzerland)
  'en-CK': LOCALE_KEY.En, // English (Cook Islands) English (Cook Islands)
  'en-CM': LOCALE_KEY.En, // English (Cameroon) English (Cameroon)
  'en-CX': LOCALE_KEY.En, // English (Christmas Island) English (Christmas Island)
  'en-CY': LOCALE_KEY.En, // English (Cyprus) English (Cyprus)
  'en-DE': LOCALE_KEY.En, // English (Germany) English (Germany)
  'en-DG': LOCALE_KEY.En, // English (Diego Garcia) English (Diego Garcia)
  'en-DK': LOCALE_KEY.En, // English (Denmark) English (Denmark)
  'en-DM': LOCALE_KEY.En, // English (Dominica) English (Dominica)
  'en-ER': LOCALE_KEY.En, // English (Eritrea) English (Eritrea)
  'en-FI': LOCALE_KEY.En, // English (Finland) English (Finland)
  'en-FJ': LOCALE_KEY.En, // English (Fiji) English (Fiji)
  'en-FK': LOCALE_KEY.En, // English (Falkland Islands) English (Falkland Islands)
  'en-FM': LOCALE_KEY.En, // English (Micronesia) English (Micronesia)
  'en-GB': LOCALE_KEY.EnGb, // English (United Kingdom) English (United Kingdom) British English
  'en-GD': LOCALE_KEY.En, // English (Grenada) English (Grenada)
  'en-GG': LOCALE_KEY.En, // English (Guernsey) English (Guernsey)
  'en-GH': LOCALE_KEY.En, // English (Ghana) English (Ghana)
  'en-GI': LOCALE_KEY.En, // English (Gibraltar) English (Gibraltar)
  'en-GM': LOCALE_KEY.En, // English (Gambia) English (Gambia)
  'en-GU': LOCALE_KEY.En, // English (Guam) English (Guam)
  'en-GY': LOCALE_KEY.En, // English (Guyana) English (Guyana)
  'en-HK': LOCALE_KEY.En, // English (Hong Kong SAR China) English (Hong Kong SAR China)
  'en-IE': LOCALE_KEY.EnIe, // English (Ireland) English (Ireland)
  'en-IL': LOCALE_KEY.En, // English (Israel) English (Israel)
  'en-IM': LOCALE_KEY.En, // English (Isle of Man) English (Isle of Man)
  'en-IN': LOCALE_KEY.En, // English (India) English (India)
  'en-IO': LOCALE_KEY.En, // English (British Indian Ocean Territory) English (British Indian Ocean Territory)
  'en-JE': LOCALE_KEY.En, // English (Jersey) English (Jersey)
  'en-JM': LOCALE_KEY.En, // English (Jamaica) English (Jamaica)
  'en-KE': LOCALE_KEY.En, // English (Kenya) English (Kenya)
  'en-KI': LOCALE_KEY.En, // English (Kiribati) English (Kiribati)
  'en-KN': LOCALE_KEY.En, // English (St. Kitts & Nevis) English (St. Kitts & Nevis)
  'en-KY': LOCALE_KEY.En, // English (Cayman Islands) English (Cayman Islands)
  'en-LC': LOCALE_KEY.En, // English (St. Lucia) English (St. Lucia)
  'en-LR': LOCALE_KEY.En, // English (Liberia) English (Liberia)
  'en-LS': LOCALE_KEY.En, // English (Lesotho) English (Lesotho)
  'en-MG': LOCALE_KEY.En, // English (Madagascar) English (Madagascar)
  'en-MH': LOCALE_KEY.En, // English (Marshall Islands) English (Marshall Islands)
  'en-MO': LOCALE_KEY.En, // English (Macau SAR China) English (Macau SAR China)
  'en-MP': LOCALE_KEY.En, // English (Northern Mariana Islands) English (Northern Mariana Islands)
  'en-MS': LOCALE_KEY.En, // English (Montserrat) English (Montserrat)
  'en-MT': LOCALE_KEY.En, // English (Malta) English (Malta)
  'en-MU': LOCALE_KEY.En, // English (Mauritius) English (Mauritius)
  'en-MW': LOCALE_KEY.En, // English (Malawi) English (Malawi)
  'en-MY': LOCALE_KEY.En, // English (Malaysia) English (Malaysia)
  'en-NA': LOCALE_KEY.En, // English (Namibia) English (Namibia)
  'en-NF': LOCALE_KEY.En, // English (Norfolk Island) English (Norfolk Island)
  'en-NG': LOCALE_KEY.En, // English (Nigeria) English (Nigeria)
  'en-NL': LOCALE_KEY.En, // English (Netherlands) English (Netherlands)
  'en-NR': LOCALE_KEY.En, // English (Nauru) English (Nauru)
  'en-NU': LOCALE_KEY.En, // English (Niue) English (Niue)
  'en-NZ': LOCALE_KEY.EnNz, // English (New Zealand) English (New Zealand)
  'en-PG': LOCALE_KEY.En, // English (Papua New Guinea) English (Papua New Guinea)
  'en-PH': LOCALE_KEY.En, // English (Philippines) English (Philippines)
  'en-PK': LOCALE_KEY.En, // English (Pakistan) English (Pakistan)
  'en-PN': LOCALE_KEY.En, // English (Pitcairn Islands) English (Pitcairn Islands)
  'en-PR': LOCALE_KEY.En, // English (Puerto Rico) English (Puerto Rico)
  'en-PW': LOCALE_KEY.En, // English (Palau) English (Palau)
  'en-RW': LOCALE_KEY.En, // English (Rwanda) English (Rwanda)
  'en-SB': LOCALE_KEY.En, // English (Solomon Islands) English (Solomon Islands)
  'en-SC': LOCALE_KEY.En, // English (Seychelles) English (Seychelles)
  'en-SD': LOCALE_KEY.En, // English (Sudan) English (Sudan)
  'en-SE': LOCALE_KEY.En, // English (Sweden) English (Sweden)
  'en-SG': LOCALE_KEY.En, // English (Singapore) English (Singapore)
  'en-SH': LOCALE_KEY.En, // English (St. Helena) English (St. Helena)
  'en-SI': LOCALE_KEY.En, // English (Slovenia) English (Slovenia)
  'en-SL': LOCALE_KEY.En, // English (Sierra Leone) English (Sierra Leone)
  'en-SS': LOCALE_KEY.En, // English (South Sudan) English (South Sudan)
  'en-SX': LOCALE_KEY.En, // English (Sint Maarten) English (Sint Maarten)
  'en-SZ': LOCALE_KEY.En, // English (Swaziland) English (Swaziland)
  'en-TC': LOCALE_KEY.En, // English (Turks & Caicos Islands) English (Turks & Caicos Islands)
  'en-TK': LOCALE_KEY.En, // English (Tokelau) English (Tokelau)
  'en-TO': LOCALE_KEY.En, // English (Tonga) English (Tonga)
  'en-TT': LOCALE_KEY.En, // English (Trinidad & Tobago) English (Trinidad & Tobago)
  'en-TV': LOCALE_KEY.En, // English (Tuvalu) English (Tuvalu)
  'en-TZ': LOCALE_KEY.En, // English (Tanzania) English (Tanzania)
  'en-UG': LOCALE_KEY.En, // English (Uganda) English (Uganda)
  'en-UM': LOCALE_KEY.En, // English (U.S. Outlying Islands) English (U.S. Outlying Islands)
  'en-US': LOCALE_KEY.EnUs, // English (United States) English (United States) American English
  'en-US-POSIX': LOCALE_KEY.EnUs, // English (United States, Computer) American English (Computer)
  'en-VC': LOCALE_KEY.En, // English (St. Vincent & Grenadines) English (St. Vincent & Grenadines)
  'en-VG': LOCALE_KEY.En, // English (British Virgin Islands) English (British Virgin Islands)
  'en-VI': LOCALE_KEY.En, // English (U.S. Virgin Islands) English (U.S. Virgin Islands)
  'en-VU': LOCALE_KEY.En, // English (Vanuatu) English (Vanuatu)
  'en-WS': LOCALE_KEY.En, // English (Samoa) English (Samoa)
  'en-ZA': LOCALE_KEY.En, // English (South Africa) English (South Africa)
  'en-ZM': LOCALE_KEY.En, // English (Zambia) English (Zambia)
  'en-ZW': LOCALE_KEY.En, // English (Zimbabwe) English (Zimbabwe)
  // 'eo', // Esperanto esperanto
  es: LOCALE_KEY.Es, // Spanish español
  'es-419': LOCALE_KEY.Es419, // Spanish (Latin America) español (Latinoamérica) Latin American Spanish
  'es-AR': LOCALE_KEY.Es419, // Spanish (Argentina) español (Argentina)
  'es-BO': LOCALE_KEY.Es419, // Spanish (Bolivia) español (Bolivia)
  'es-BR': LOCALE_KEY.Es419, // Spanish (Brazil) español (Brasil)
  'es-BZ': LOCALE_KEY.Es419, // Spanish (Belize) español (Belice)
  'es-CL': LOCALE_KEY.Es419, // Spanish (Chile) español (Chile)
  'es-CO': LOCALE_KEY.Es419, // Spanish (Colombia) español (Colombia)
  'es-CR': LOCALE_KEY.Es419, // Spanish (Costa Rica) español (Costa Rica)
  'es-CU': LOCALE_KEY.Es419, // Spanish (Cuba) español (Cuba)
  'es-DO': LOCALE_KEY.Es419, // Spanish (Dominican Republic) español (República Dominicana)
  'es-EA': LOCALE_KEY.Es419, // Spanish (Ceuta & Melilla) español (Ceuta y Melilla)
  'es-EC': LOCALE_KEY.Es419, // Spanish (Ecuador) español (Ecuador)
  'es-ES': LOCALE_KEY.EsEs, // Spanish (Spain) español (España) European Spanish
  'es-GQ': LOCALE_KEY.Es419, // Spanish (Equatorial Guinea) español (Guinea Ecuatorial)
  'es-GT': LOCALE_KEY.Es419, // Spanish (Guatemala) español (Guatemala)
  'es-HN': LOCALE_KEY.Es419, // Spanish (Honduras) español (Honduras)
  'es-IC': LOCALE_KEY.Es419, // Spanish (Canary Islands) español (Canarias)
  'es-MX': LOCALE_KEY.Es419, // Spanish (Mexico) español (México) Mexican Spanish
  'es-NI': LOCALE_KEY.Es419, // Spanish (Nicaragua) español (Nicaragua)
  'es-PA': LOCALE_KEY.Es419, // Spanish (Panama) español (Panamá)
  'es-PE': LOCALE_KEY.Es419, // Spanish (Peru) español (Perú)
  'es-PH': LOCALE_KEY.Es419, // Spanish (Philippines) español (Filipinas)
  'es-PR': LOCALE_KEY.Es419, // Spanish (Puerto Rico) español (Puerto Rico)
  'es-PY': LOCALE_KEY.Es419, // Spanish (Paraguay) español (Paraguay)
  'es-SV': LOCALE_KEY.Es419, // Spanish (El Salvador) español (El Salvador)
  'es-US': LOCALE_KEY.Es419, // Spanish (United States) español (Estados Unidos)
  'es-UY': LOCALE_KEY.Es419, // Spanish (Uruguay) español (Uruguay)
  'es-VE': LOCALE_KEY.Es419, // Spanish (Venezuela) español (Venezuela)
  et: LOCALE_KEY.EtEe, // Estonian eesti
  'et-EE': LOCALE_KEY.EtEe, // Estonian (Estonia) eesti (Eesti)
  // 'eu', // Basque euskara
  // 'eu-ES', // Basque (Spain) euskara (Espainia)
  // 'ewo', // Ewondo ewondo
  // 'ewo-CM', // Ewondo (Cameroon) ewondo (Kamərún)
  // 'fa', // Persian فارسی TODO
  // 'fa-AF', // Persian (Afghanistan) فارسی (افغانستان) Dari TODO
  // 'fa-IR', // Persian (Iran) فارسی (ایران) TODO
  // 'ff', // Fulah Pulaar
  // 'ff-CM', // Fulah (Cameroon) Pulaar (Kameruun)
  // 'ff-GN', // Fulah (Guinea) Pulaar (Gine)
  // 'ff-MR', // Fulah (Mauritania) Pulaar (Muritani)
  // 'ff-SN', // Fulah (Senegal) Pulaar (Senegaal)
  fi: LOCALE_KEY.FiFi, // Finnish suomi
  'fi-FI': LOCALE_KEY.FiFi, // Finnish (Finland) suomi (Suomi)
  // 'fil', // Filipino Filipino TODO
  // 'fil-PH', // Filipino (Philippines) Filipino (Pilipinas) TODO
  // 'fo', // Faroese føroyskt
  // 'fo-DK', // Faroese (Denmark) føroyskt (Danmark)
  // 'fo-FO', // Faroese (Faroe Islands) føroyskt (Føroyar)
  fr: LOCALE_KEY.Fr, // French français
  'fr-BE': LOCALE_KEY.FrBe, // French (Belgium) français (Belgique)
  'fr-BF': LOCALE_KEY.Fr, // French (Burkina Faso) français (Burkina Faso)
  'fr-BI': LOCALE_KEY.Fr, // French (Burundi) français (Burundi)
  'fr-BJ': LOCALE_KEY.Fr, // French (Benin) français (Bénin)
  'fr-BL': LOCALE_KEY.Fr, // French (St. Barthélemy) français (Saint-Barthélemy)
  'fr-CA': LOCALE_KEY.FrCa, // French (Canada) français (Canada) Canadian French
  'fr-CD': LOCALE_KEY.Fr, // French (Congo - Kinshasa) français (Congo-Kinshasa)
  'fr-CF': LOCALE_KEY.Fr, // French (Central African Republic) français (République centrafricaine)
  'fr-CG': LOCALE_KEY.Fr, // French (Congo - Brazzaville) français (Congo-Brazzaville)
  'fr-CH': LOCALE_KEY.FrCh, // French (Switzerland) français (Suisse) Swiss French
  'fr-CI': LOCALE_KEY.Fr, // French (Côte d’Ivoire) français (Côte d’Ivoire)
  'fr-CM': LOCALE_KEY.Fr, // French (Cameroon) français (Cameroun)
  'fr-DJ': LOCALE_KEY.Fr, // French (Djibouti) français (Djibouti)
  'fr-DZ': LOCALE_KEY.Fr, // French (Algeria) français (Algérie)
  'fr-FR': LOCALE_KEY.FrFr, // French (France) français (France)
  'fr-GA': LOCALE_KEY.Fr, // French (Gabon) français (Gabon)
  'fr-GF': LOCALE_KEY.Fr, // French (French Guiana) français (Guyane française)
  'fr-GN': LOCALE_KEY.Fr, // French (Guinea) français (Guinée)
  'fr-GP': LOCALE_KEY.Fr, // French (Guadeloupe) français (Guadeloupe)
  'fr-GQ': LOCALE_KEY.Fr, // French (Equatorial Guinea) français (Guinée équatoriale)
  'fr-HT': LOCALE_KEY.Fr, // French (Haiti) français (Haïti)
  'fr-KM': LOCALE_KEY.Fr, // French (Comoros) français (Comores)
  'fr-LU': LOCALE_KEY.Fr, // French (Luxembourg) français (Luxembourg)
  'fr-MA': LOCALE_KEY.Fr, // French (Morocco) français (Maroc)
  'fr-MC': LOCALE_KEY.Fr, // French (Monaco) français (Monaco)
  'fr-MF': LOCALE_KEY.Fr, // French (St. Martin) français (Saint-Martin)
  'fr-MG': LOCALE_KEY.Fr, // French (Madagascar) français (Madagascar)
  'fr-ML': LOCALE_KEY.Fr, // French (Mali) français (Mali)
  'fr-MQ': LOCALE_KEY.Fr, // French (Martinique) français (Martinique)
  'fr-MR': LOCALE_KEY.Fr, // French (Mauritania) français (Mauritanie)
  'fr-MU': LOCALE_KEY.Fr, // French (Mauritius) français (Maurice)
  'fr-NC': LOCALE_KEY.Fr, // French (New Caledonia) français (Nouvelle-Calédonie)
  'fr-NE': LOCALE_KEY.Fr, // French (Niger) français (Niger)
  'fr-PF': LOCALE_KEY.Fr, // French (French Polynesia) français (Polynésie française)
  'fr-PM': LOCALE_KEY.Fr, // French (St. Pierre & Miquelon) français (Saint-Pierre-et-Miquelon)
  'fr-RE': LOCALE_KEY.Fr, // French (Réunion) français (La Réunion)
  'fr-RW': LOCALE_KEY.Fr, // French (Rwanda) français (Rwanda)
  'fr-SC': LOCALE_KEY.Fr, // French (Seychelles) français (Seychelles)
  'fr-SN': LOCALE_KEY.Fr, // French (Senegal) français (Sénégal)
  'fr-SY': LOCALE_KEY.Fr, // French (Syria) français (Syrie)
  'fr-TD': LOCALE_KEY.Fr, // French (Chad) français (Tchad)
  'fr-TG': LOCALE_KEY.Fr, // French (Togo) français (Togo)
  'fr-TN': LOCALE_KEY.Fr, // French (Tunisia) français (Tunisie)
  'fr-VU': LOCALE_KEY.Fr, // French (Vanuatu) français (Vanuatu)
  'fr-WF': LOCALE_KEY.Fr, // French (Wallis & Futuna) français (Wallis-et-Futuna)
  'fr-YT': LOCALE_KEY.Fr, // French (Mayotte) français (Mayotte)
  // 'fur', // Friulian furlan
  // 'fur-IT', // Friulian (Italy) furlan (Italie)
  // 'fy', // Western Frisian Fryskx
  // 'fy-NL', // Western Frisian (Netherlands) Frysk (Nederlân)
  // 'ga', // Irish Gaeilge TODO
  // 'ga-IE', // Irish (Ireland) Gaeilge (Éire) TODO
  // 'gd', // Scottish Gaelic Gàidhlig
  // 'gd-GB', // Scottish Gaelic (United Kingdom) Gàidhlig (An Rìoghachd Aonaichte)
  // 'gl', // Galician galego
  // 'gl-ES', // Galician (Spain) galego (España)
  gsw: LOCALE_KEY.DeCh, // Swiss German Schwiizertüütsch
  'gsw-CH': LOCALE_KEY.DeCh, // Swiss German (Switzerland) Schwiizertüütsch (Schwiiz)
  'gsw-FR': LOCALE_KEY.DeCh, // Swiss German (France) Schwiizertüütsch (Frankriich)
  'gsw-LI': LOCALE_KEY.DeCh, // Swiss German (Liechtenstein) Schwiizertüütsch (Liächteschtäi)
  // 'gu', // Gujarati ગુજરાતી TODO
  // 'gu-IN', // Gujarati (India) ગુજરાતી (ભારત) TODO
  // 'guz', // Gusii Ekegusii
  // 'guz-KE', // Gusii (Kenya) Ekegusii (Kenya)
  // 'gv', // Manx Gaelg
  // 'gv-IM', // Manx (Isle of Man) Gaelg (Ellan Vannin)
  // 'ha', // Hausa Hausa TODO
  // 'ha-GH', // Hausa (Ghana) Hausa (Gana) TODO
  // 'ha-NE', // Hausa (Niger) Hausa (Nijar) TODO
  // 'ha-NG', // Hausa (Nigeria) Hausa (Najeriya) TODO
  // 'haw', // Hawaiian ʻŌlelo Hawaiʻi
  // 'haw-US', // Hawaiian (United States) ʻŌlelo Hawaiʻi (ʻAmelika Hui Pū ʻIa)
  he: LOCALE_KEY.HeIl, // Hebrew עברית
  'he-IL': LOCALE_KEY.HeIl, // Hebrew (Israel) עברית (ישראל)
  hi: LOCALE_KEY.HiIn, // Hindi हिन्दी
  'hi-IN': LOCALE_KEY.HiIn, // Hindi (India) हिन्दी (भारत)
  hr: LOCALE_KEY.HrHr, // Croatian hrvatski
  'hr-BA': LOCALE_KEY.HrHr, // Croatian (Bosnia & Herzegovina) hrvatski (Bosna i Hercegovina)
  'hr-HR': LOCALE_KEY.HrHr, // Croatian (Croatia) hrvatski (Hrvatska)
  // 'hsb', // Upper Sorbian hornjoserbšćina
  // 'hsb-DE', // Upper Sorbian (Germany) hornjoserbšćina (Němska)
  hu: LOCALE_KEY.HuHu, // Hungarian magyar
  'hu-HU': LOCALE_KEY.HuHu, // Hungarian (Hungary) magyar (Magyarország)
  // 'hy', // Armenian հայերեն TODO
  // 'hy-AM', // Armenian (Armenia) հայերեն (Հայաստան) TODO
  id: LOCALE_KEY.IdId, // Indonesian Indonesia
  'id-ID': LOCALE_KEY.IdId, // Indonesian (Indonesia) Indonesia (Indonesia)
  // 'ig', // Igbo Igbo
  // 'ig-NG', // Igbo (Nigeria) Igbo (Naịjịrịa)
  // 'ii', // Sichuan Yi ꆈꌠꉙ
  // 'ii-CN', // Sichuan Yi (China) ꆈꌠꉙ (ꍏꇩ)
  is: LOCALE_KEY.IsIs, // Icelandic íslenska
  'is-IS': LOCALE_KEY.IsIs, // Icelandic (Iceland) íslenska (Ísland)
  it: LOCALE_KEY.It, // Italian italiano
  'it-CH': LOCALE_KEY.ItCh, // Italian (Switzerland) italiano (Svizzera)
  'it-IT': LOCALE_KEY.ItIt, // Italian (Italy) italiano (Italia)
  'it-SM': LOCALE_KEY.ItIt, // Italian (San Marino) italiano (San Marino)
  'it-VA': LOCALE_KEY.ItIt, // Italian (Vatican City) italiano (Città del Vaticano)
  ja: LOCALE_KEY.Ja, // Japanese 日本語
  'ja-JP': LOCALE_KEY.JaJp, // Japanese (Japan) 日本語 (日本)
  // 'jgo', // Ngomba Ndaꞌa
  // 'jgo-CM', // Ngomba (Cameroon) Ndaꞌa (Kamɛlûn)
  // 'jmc', // Machame Kimachame
  // 'jmc-TZ', // Machame (Tanzania) Kimachame (Tanzania)
  // 'ka', // Georgian ქართული TODO
  // 'ka-GE', // Georgian (Georgia) ქართული (საქართველო) TODO
  // 'kab', // Kabyle Taqbaylit
  // 'kab-DZ', // Kabyle (Algeria) Taqbaylit (Lezzayer)
  // 'kam', // Kamba Kikamba
  // 'kam-KE', // Kamba (Kenya) Kikamba (Kenya)
  // 'kde', // Makonde Chimakonde
  // 'kde-TZ', // Makonde (Tanzania) Chimakonde (Tanzania)
  // 'kea', // Kabuverdianu kabuverdianu
  // 'kea-CV', // Kabuverdianu (Cape Verde) kabuverdianu (Kabu Verdi)
  // 'khq', // Koyra Chiini Koyra ciini
  // 'khq-ML', // Koyra Chiini (Mali) Koyra ciini (Maali)
  // 'ki', // Kikuyu Gikuyu
  // 'ki-KE', // Kikuyu (Kenya) Gikuyu (Kenya)
  // 'kk', // Kazakh қазақ тілі TODO
  // 'kk-KZ', // Kazakh (Kazakhstan) қазақ тілі (Қазақстан) TODO
  // 'kkj', // Kako kakɔ
  // 'kkj-CM', // Kako (Cameroon) kakɔ (Kamɛrun)
  // 'kl', // Kalaallisut kalaallisut
  // 'kl-GL', // Kalaallisut (Greenland) kalaallisut (Kalaallit Nunaat)
  // 'kln', // Kalenjin Kalenjin
  // 'kln-KE', // Kalenjin (Kenya) Kalenjin (Emetab Kenya)
  // 'km', // Khmer ខ្មែរ
  // 'km-KH', // Khmer (Cambodia) ខ្មែរ (កម្ពុជា)
  // 'kn', // Kannada ಕನ್ನಡ TODO
  // 'kn-IN', // Kannada (India) ಕನ್ನಡ (ಭಾರತ) TODO
  ko: LOCALE_KEY.KoKr, // Korean 한국어
  'ko-KP': LOCALE_KEY.KoKr, // Korean (North Korea) 한국어(조선민주주의인민공화국)
  'ko-KR': LOCALE_KEY.KoKr, // Korean (South Korea) 한국어(대한민국)
  // 'kok', // Konkani कोंकणी
  // 'kok-IN', // Konkani (India) कोंकणी (भारत)
  // 'ks', // Kashmiri کٲشُر
  // 'ks-IN', // Kashmiri (India) کٲشُر (ہِنٛدوستان)
  // 'ksb', // Shambala Kishambaa
  // 'ksb-TZ', // Shambala (Tanzania) Kishambaa (Tanzania)
  // 'ksf', // Bafia rikpa
  // 'ksf-CM', // Bafia (Cameroon) rikpa (kamɛrún)
  // 'ksh', // Colognian Kölsch
  // 'ksh-DE', // Colognian (Germany) Kölsch en Doütschland
  // 'kw', // Cornish kernewek
  // 'kw-GB', // Cornish (United Kingdom) kernewek (Rywvaneth Unys)
  // 'ky', // Kyrgyz кыргызча
  // 'ky-KG', // Kyrgyz (Kyrgyzstan) кыргызча (Кыргызстан)
  // 'lag', // Langi Kɨlaangi
  // 'lag-TZ', // Langi (Tanzania) Kɨlaangi (Taansanía)
  // 'lb', // Luxembourgish Lëtzebuergesch
  // 'lb-LU', // Luxembourgish (Luxembourg) Lëtzebuergesch (Lëtzebuerg)
  // 'lg', // Ganda Luganda
  // 'lg-UG', // Ganda (Uganda) Luganda (Yuganda)
  // 'lkt', // Lakota Lakȟólʼiyapi
  // 'lkt-US', // Lakota (United States) Lakȟólʼiyapi (Mílahaŋska Tȟamákȟočhe)
  // 'ln', // Lingala lingála
  // 'ln-AO', // Lingala (Angola) lingála (Angóla)
  // 'ln-CD', // Lingala (Congo - Kinshasa) lingála (Republíki ya Kongó Demokratíki)
  // 'ln-CF', // Lingala (Central African Republic) lingála (Repibiki ya Afríka ya Káti)
  // 'ln-CG', // Lingala (Congo - Brazzaville) lingála (Kongo)
  // 'lo', // Lao ລາວ
  // 'lo-LA', // Lao (Laos) ລາວ (ລາວ)
  // 'lrc', // Northern Luri لۊری شومالی
  // 'lrc-IQ', // Northern Luri (Iraq) لۊری شومالی (IQ)
  // 'lrc-IR', // Northern Luri (Iran) لۊری شومالی (IR)
  lt: LOCALE_KEY.LtLt, // Lithuanian lietuvių
  'lt-LT': LOCALE_KEY.LtLt, // Lithuanian (Lithuania) lietuvių (Lietuva)
  // 'lu', // Luba-Katanga Tshiluba
  // 'lu-CD', // Luba-Katanga (Congo - Kinshasa) Tshiluba (Ditunga wa Kongu)
  // 'luo', // Luo Dholuo
  // 'luo-KE', // Luo (Kenya) Dholuo (Kenya)
  // 'luy', // Luyia Luluhia
  // 'luy-KE', // Luyia (Kenya) Luluhia (Kenya)
  lv: LOCALE_KEY.LvLv, // Latvian latviešu
  'lv-LV': LOCALE_KEY.LvLv, // Latvian (Latvia) latviešu (Latvija)
  // 'mas', // Masai Maa
  // 'mas-KE', // Masai (Kenya) Maa (Kenya)
  // 'mas-TZ', // Masai (Tanzania) Maa (Tansania)
  // 'mer', // Meru Kĩmĩrũ
  // 'mer-KE', // Meru (Kenya) Kĩmĩrũ (Kenya)
  // 'mfe', // Morisyen kreol morisien
  // 'mfe-MU', // Morisyen (Mauritius) kreol morisien (Moris)
  // 'mg', // Malagasy Malagasy
  // 'mg-MG', // Malagasy (Madagascar) Malagasy (Madagasikara)
  // 'mgh', // Makhuwa-Meetto Makua
  // 'mgh-MZ', // Makhuwa-Meetto (Mozambique) Makua (Umozambiki)
  // 'mgo', // Metaʼ metaʼ
  // 'mgo-CM', // Metaʼ (Cameroon) metaʼ (Kamalun)
  // 'mk', // Macedonian македонски TODO
  // 'mk-MK', // Macedonian (Macedonia) македонски (Македонија) TODO
  // 'ml', // Malayalam മലയാളം
  // 'ml-IN', // Malayalam (India) മലയാളം (ഇന്ത്യ)
  // 'mn', // Mongolian монгол TODO
  // 'mn-MN', // Mongolian (Mongolia) монгол (Монгол) TODO
  mr: LOCALE_KEY.MrIn, // Marathi मराठी
  'mr-IN': LOCALE_KEY.MrIn, // Marathi (India) मराठी (भारत)
  ms: LOCALE_KEY.MsMy, // Malay Melayu
  'ms-BN': LOCALE_KEY.MsMy, // Malay (Brunei) Melayu (Brunei)
  'ms-MY': LOCALE_KEY.MsMy, // Malay (Malaysia) Melayu (Malaysia)
  'ms-SG': LOCALE_KEY.MsMy, // Malay (Singapore) Melayu (Singapura)
  mt: LOCALE_KEY.MtMt, // Maltese Malti
  'mt-MT': LOCALE_KEY.MtMt, // Maltese (Malta) Malti (Malta)
  // 'mua', // Mundang MUNDAŊ
  // 'mua-CM', // Mundang (Cameroon) MUNDAŊ (kameruŋ)
  // 'my', // Burmese မြန်မာ
  // 'my-MM', // Burmese (Myanmar [Burma]) မြန်မာ (မြန်မာ)
  // 'mzn', // Mazanderani مازرونی
  // 'mzn-IR', // Mazanderani (Iran) مازرونی (ایران)
  // 'naq', // Nama Khoekhoegowab
  // 'naq-NA', // Nama (Namibia) Khoekhoegowab (Namibiab)
  nb: LOCALE_KEY.NbNi, // Norwegian Bokmål norsk bokmål
  'nb-NO': LOCALE_KEY.NbNi, // Norwegian Bokmål (Norway) norsk bokmål (Norge)
  'nb-SJ': LOCALE_KEY.NbNi, // Norwegian Bokmål (Svalbard & Jan Mayen) norsk bokmål (Svalbard og Jan Mayen)
  // 'nd', // North Ndebele isiNdebele
  // 'nd-ZW', // North Ndebele (Zimbabwe) isiNdebele (Zimbabwe)
  // 'nds', // Low German nds TODO?
  // 'nds-DE', // Low German (Germany) nds (DE) TODO?
  // 'nds-NL', // Low German (Netherlands) nds (NL) Low Saxon TODO?
  // 'ne', // Nepali नेपाली
  // 'ne-IN', // Nepali (India) नेपाली (भारत)
  // 'ne-NP', // Nepali (Nepal) नेपाली (नेपाल)
  nl: LOCALE_KEY.NlNl, // Dutch Nederlands
  'nl-AW': LOCALE_KEY.NlNl, // Dutch (Aruba) Nederlands (Aruba)
  'nl-BE': LOCALE_KEY.NlBe, // Dutch (Belgium) Nederlands (België) Flemish
  'nl-BQ': LOCALE_KEY.NlNl, // Dutch (Caribbean Netherlands) Nederlands (Caribisch Nederland)
  'nl-CW': LOCALE_KEY.NlNl, // Dutch (Curaçao) Nederlands (Curaçao)
  'nl-NL': LOCALE_KEY.NlNl, // Dutch (Netherlands) Nederlands (Nederland)
  'nl-SR': LOCALE_KEY.NlNl, // Dutch (Suriname) Nederlands (Suriname)
  'nl-SX': LOCALE_KEY.NlNl, // Dutch (Sint Maarten) Nederlands (Sint-Maarten)
  // 'nmg', // Kwasio nmg
  // 'nmg-CM', // Kwasio (Cameroon) nmg (Kamerun)
  // 'nn', // Norwegian Nynorsk nynorsk
  // 'nn-NO', // Norwegian Nynorsk (Norway) nynorsk (Noreg)
  // 'nnh', // Ngiemboon Shwóŋò ngiembɔɔn
  // 'nnh-CM', // Ngiemboon (Cameroon) Shwóŋò ngiembɔɔn (Kàmalûm)
  // 'nus', // Nuer Thok Nath
  // 'nus-SS', // Nuer (South Sudan) Thok Nath (SS)
  // 'nyn', // Nyankole Runyankore
  // 'nyn-UG', // Nyankole (Uganda) Runyankore (Uganda)
  // 'om', // Oromo Oromoo
  // 'om-ET', // Oromo (Ethiopia) Oromoo (Itoophiyaa)
  // 'om-KE', // Oromo (Kenya) Oromoo (Keeniyaa)
  // 'or', // Odia ଓଡ଼ିଆ
  // 'or-IN', // Odia (India) ଓଡ଼ିଆ (ଭାରତ)
  // 'os', // Ossetic ирон
  // 'os-GE', // Ossetic (Georgia) ирон (Гуырдзыстон)
  // 'os-RU', // Ossetic (Russia) ирон (Уӕрӕсе)
  // 'pa', // Punjabi ਪੰਜਾਬੀ TODO
  // 'pa-Arab', // Punjabi (Arabic) پنجابی (عربی) TODO
  // 'pa-Arab-PK', // Punjabi (Arabic, Pakistan) پنجابی (عربی, پاکستان) TODO
  // 'pa-Guru', // Punjabi (Gurmukhi) ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ) TODO
  // 'pa-Guru-IN', // Punjabi (Gurmukhi, India) ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ, ਭਾਰਤ) TODO
  pl: LOCALE_KEY.PlPl, // Polish polski
  'pl-PL': LOCALE_KEY.PlPl, // Polish (Poland) polski (Polska)
  // 'ps', // Pashto پښتو TODO
  // 'ps-AF', // Pashto (Afghanistan) پښتو (افغانستان) TODO
  pt: LOCALE_KEY.PtPt, // Portuguese português
  'pt-AO': LOCALE_KEY.PtPt, // Portuguese (Angola) português (Angola)
  'pt-BR': LOCALE_KEY.PtBr, // Portuguese (Brazil) português (Brasil) Brazilian Portuguese
  'pt-CH': LOCALE_KEY.PtPt, // Portuguese (Switzerland) português (Suíça)
  'pt-CV': LOCALE_KEY.PtPt, // Portuguese (Cape Verde) português (Cabo Verde)
  'pt-GQ': LOCALE_KEY.PtPt, // Portuguese (Equatorial Guinea) português (Guiné Equatorial)
  'pt-GW': LOCALE_KEY.PtPt, // Portuguese (Guinea-Bissau) português (Guiné-Bissau)
  'pt-LU': LOCALE_KEY.PtPt, // Portuguese (Luxembourg) português (Luxemburgo)
  'pt-MO': LOCALE_KEY.PtPt, // Portuguese (Macau SAR China) português (Macau, RAE da China)
  'pt-MZ': LOCALE_KEY.PtPt, // Portuguese (Mozambique) português (Moçambique)
  'pt-PT': LOCALE_KEY.PtPt, // Portuguese (Portugal) português (Portugal) European Portuguese
  'pt-ST': LOCALE_KEY.PtPt, // Portuguese (São Tomé & Príncipe) português (São Tomé e Príncipe)
  'pt-TL': LOCALE_KEY.PtPt, // Portuguese (Timor-Leste) português (Timor-Leste)
  // 'qu', // Quechua Runasimi
  // 'qu-BO', // Quechua (Bolivia) Runasimi (Bolivia)
  // 'qu-EC', // Quechua (Ecuador) Runasimi (Ecuador)
  // 'qu-PE', // Quechua (Peru) Runasimi (Perú)
  // 'rm', // Romansh rumantsch
  // 'rm-CH', // Romansh (Switzerland) rumantsch (Svizra)
  // 'rn', // Rundi Ikirundi
  // 'rn-BI', // Rundi (Burundi) Ikirundi (Uburundi)
  ro: LOCALE_KEY.RoRo, // Romanian română
  'ro-MD': LOCALE_KEY.RoRo, // Romanian (Moldova) română (Republica Moldova) Moldavian
  'ro-RO': LOCALE_KEY.RoRo, // Romanian (Romania) română (România)
  // 'rof', // Rombo Kihorombo
  // 'rof-TZ', // Rombo (Tanzania) Kihorombo (Tanzania)
  ru: LOCALE_KEY.Ru, // Russian русский
  'ru-BY': LOCALE_KEY.Ru, // Russian (Belarus) русский (Беларусь)
  'ru-KG': LOCALE_KEY.Ru, // Russian (Kyrgyzstan) русский (Киргизия)
  'ru-KZ': LOCALE_KEY.Ru, // Russian (Kazakhstan) русский (Казахстан)
  'ru-MD': LOCALE_KEY.Ru, // Russian (Moldova) русский (Молдова)
  'ru-RU': LOCALE_KEY.RuRu, // Russian (Russia) русский (Россия)
  'ru-UA': LOCALE_KEY.Ru, // Russian (Ukraine) русский (Украина)
  // 'rw', // Kinyarwanda Kinyarwanda
  // 'rw-RW', // Kinyarwanda (Rwanda) Kinyarwanda (U Rwanda)
  // 'rwk', // Rwa Kiruwa
  // 'rwk-TZ', // Rwa (Tanzania) Kiruwa (Tanzania)
  // 'sah', // Sakha саха тыла
  // 'sah-RU', // Sakha (Russia) саха тыла (Арассыыйа)
  // 'saq', // Samburu Kisampur
  // 'saq-KE', // Samburu (Kenya) Kisampur (Kenya)
  // 'sbp', // Sangu Ishisangu
  // 'sbp-TZ', // Sangu (Tanzania) Ishisangu (Tansaniya)
  // 'se', // Northern Sami davvisámegiella
  // 'se-FI', // Northern Sami (Finland) davvisámegiella (Suopma)
  // 'se-NO', // Northern Sami (Norway) davvisámegiella (Norga)
  // 'se-SE', // Northern Sami (Sweden) davvisámegiella (Ruoŧŧa)
  // 'seh', // Sena sena
  // 'seh-MZ', // Sena (Mozambique) sena (Moçambique)
  // 'ses', // Koyraboro Senni Koyraboro senni
  // 'ses-ML', // Koyraboro Senni (Mali) Koyraboro senni (Maali)
  // 'sg', // Sango Sängö
  // 'sg-CF', // Sango (Central African Republic) Sängö (Ködörösêse tî Bêafrîka)
  // 'shi', // Tachelhit ⵜⴰⵛⵍⵃⵉⵜ
  // 'shi-Latn', // Tachelhit (Latin) Tashelḥiyt (Latn)
  // 'shi-Latn-MA', // Tachelhit (Latin, Morocco) Tashelḥiyt (Latn, lmɣrib)
  // 'shi-Tfng', // Tachelhit (Tifinagh) ⵜⴰⵛⵍⵃⵉⵜ (Tfng)
  // 'shi-Tfng-MA', // Tachelhit (Tifinagh, Morocco) ⵜⴰⵛⵍⵃⵉⵜ (Tfng, ⵍⵎⵖⵔⵉⴱ)
  // 'si', // Sinhala සිංහල
  // 'si-LK', // Sinhala (Sri Lanka) සිංහල (ශ්‍රී ලංකාව)
  sk: LOCALE_KEY.SkSk, // Slovak slovenčina
  'sk-SK': LOCALE_KEY.SkSk, // Slovak (Slovakia) slovenčina (Slovensko)
  sl: LOCALE_KEY.SlSl, // Slovenian slovenščina
  'sl-SI': LOCALE_KEY.SlSl, // Slovenian (Slovenia) slovenščina (Slovenija)
  // 'smn', // Inari Sami anarâškielâ
  // 'smn-FI', // Inari Sami (Finland) anarâškielâ (Suomâ)
  // 'sn', // Shona chiShona
  // 'sn-ZW', // Shona (Zimbabwe) chiShona (Zimbabwe)
  // 'so', // Somali Soomaali TODO
  // 'so-DJ', // Somali (Djibouti) Soomaali (Jabuuti) TODO
  // 'so-ET', // Somali (Ethiopia) Soomaali (Itoobiya) TODO
  // 'so-KE', // Somali (Kenya) Soomaali (Kiiniya) TODO
  // 'so-SO', // Somali (Somalia) Soomaali (Soomaaliya) TODO
  // 'sq', // Albanian shqip TODO
  // 'sq-AL', // Albanian (Albania) shqip (Shqipëri) TODO
  // 'sq-MK', // Albanian (Macedonia) shqip (Maqedoni) TODO
  // 'sq-XK', // Albanian (Kosovo) shqip (Kosovë) TODO
  sr: LOCALE_KEY.SrLatnRs, // Serbian српски
  // 'sr-Cyrl', // Serbian (Cyrillic) српски (ћирилица) TODO (latin or cyrillic?)
  // 'sr-Cyrl-BA', // Serbian (Cyrillic, Bosnia & Herzegovina) српски (ћирилица, Босна и Херцеговина) TODO (latin or cyrillic?)
  // 'sr-Cyrl-ME', // Serbian (Cyrillic, Montenegro) српски (ћирилица, Црна Гора) TODO (latin or cyrillic?)
  // 'sr-Cyrl-RS', // Serbian (Cyrillic, Serbia) српски (ћирилица, Србија) TODO (latin or cyrillic?)
  // 'sr-Cyrl-XK', // Serbian (Cyrillic, Kosovo) српски (ћирилица, Косово) TODO (latin or cyrillic?)
  'sr-Latn': LOCALE_KEY.SrLatnRs, // Serbian (Latin) srpski (latinica)
  'sr-Latn-BA': LOCALE_KEY.SrLatnRs, // Serbian (Latin, Bosnia & Herzegovina) srpski (latinica, Bosna i Hercegovina)
  'sr-Latn-ME': LOCALE_KEY.SrLatnRs, // Serbian (Latin, Montenegro) srpski (latinica, Crna Gora)
  'sr-Latn-RS': LOCALE_KEY.SrLatnRs, // Serbian (Latin, Serbia) srpski (latinica, Srbija)
  'sr-Latn-XK': LOCALE_KEY.SrLatnRs, // Serbian (Latin, Kosovo) srpski (latinica, Kosovo)
  sv: LOCALE_KEY.SvSe, // Swedish svenska
  'sv-AX': LOCALE_KEY.SvSe, // Swedish (Åland Islands) svenska (Åland)
  'sv-FI': LOCALE_KEY.SvSe, // Swedish (Finland) svenska (Finland)
  'sv-SE': LOCALE_KEY.SvSe, // Swedish (Sweden) svenska (Sverige)
  // 'sw', // Swahili Kiswahili TODO
  // 'sw-CD', // Swahili (Congo - Kinshasa) Kiswahili (Jamhuri ya Kidemokrasia ya Kongo) Congo Swahili TODO
  // 'sw-KE', // Swahili (Kenya) Kiswahili (Kenya) TODO
  // 'sw-TZ', // Swahili (Tanzania) Kiswahili (Tanzania) TODO
  // 'sw-UG', // Swahili (Uganda) Kiswahili (Uganda) TODO
  ta: LOCALE_KEY.TaIn, // Tamil தமிழ்
  'ta-IN': LOCALE_KEY.TaIn, // Tamil (India) தமிழ் (இந்தியா)
  'ta-LK': LOCALE_KEY.TaIn, // Tamil (Sri Lanka) தமிழ் (இலங்கை)
  'ta-MY': LOCALE_KEY.TaIn, // Tamil (Malaysia) தமிழ் (மலேசியா)
  'ta-SG': LOCALE_KEY.TaIn, // Tamil (Singapore) தமிழ் (சிங்கப்பூர்)
  // 'te', // Telugu తెలుగు TODO
  // 'te-IN', // Telugu (India) తెలుగు (భారతదేశం) TODO
  // 'teo', // Teso Kiteso
  // 'teo-KE', // Teso (Kenya) Kiteso (Kenia)
  // 'teo-UG', // Teso (Uganda) Kiteso (Uganda)
  // 'tg', // Tajik тоҷикӣ
  // 'tg-TJ', // Tajik (Tajikistan) тоҷикӣ (Тоҷикистон)
  th: LOCALE_KEY.ThTh, // Thai ไทย
  'th-TH': LOCALE_KEY.ThTh, // Thai (Thailand) ไทย (ไทย)
  // 'ti', // Tigrinya ትግርኛ
  // 'ti-ER', // Tigrinya (Eritrea) ትግርኛ (ኤርትራ)
  // 'ti-ET', // Tigrinya (Ethiopia) ትግርኛ (ኢትዮጵያ)
  // 'to', // Tongan lea fakatonga
  // 'to-TO', // Tongan (Tonga) lea fakatonga (Tonga)
  tr: LOCALE_KEY.TrTr, // Turkish Türkçe
  'tr-CY': LOCALE_KEY.TrTr, // Turkish (Cyprus) Türkçe (Kıbrıs)
  'tr-TR': LOCALE_KEY.TrTr, // Turkish (Turkey) Türkçe (Türkiye)
  // 'tt', // Tatar татар
  // 'tt-RU', // Tatar (Russia) татар (Россия)
  // 'twq', // Tasawaq Tasawaq senni
  // 'twq-NE', // Tasawaq (Niger) Tasawaq senni (Nižer)
  // 'tzm', // Central Atlas Tamazight Tamaziɣt n laṭlaṣ
  // 'tzm-MA', // Central Atlas Tamazight (Morocco) Tamaziɣt n laṭlaṣ (Meṛṛuk)
  // 'ug', // Uyghur ئۇيغۇرچە
  // 'ug-CN', // Uyghur (China) ئۇيغۇرچە (جۇڭگو)
  uk: LOCALE_KEY.UkUa, // Ukrainian українська
  'uk-UA': LOCALE_KEY.UkUa, // Ukrainian (Ukraine) українська (Україна)
  // 'ur', // Urdu اردو TODO
  // 'ur-IN', // Urdu (India) اردو (بھارت) TODO
  // 'ur-PK', // Urdu (Pakistan) اردو (پاکستان) TODO
  // 'uz', // Uzbek o‘zbek TODO
  // 'uz-Arab', // Uzbek (Arabic) اوزبیک (عربی) TODO
  // 'uz-Arab-AF', // Uzbek (Arabic, Afghanistan) اوزبیک (عربی, افغانستان) TODO
  // 'uz-Cyrl', // Uzbek (Cyrillic) ўзбекча (Кирил) TODO
  // 'uz-Cyrl-UZ', // Uzbek (Cyrillic, Uzbekistan) ўзбекча (Кирил, Ўзбекистон) TODO
  // 'uz-Latn', // Uzbek (Latin) o‘zbek (lotin) TODO
  // 'uz-Latn-UZ', // Uzbek (Latin, Uzbekistan) o‘zbek (lotin, Oʻzbekiston) TODO
  // 'vai', // Vai ꕙꔤ
  // 'vai-Latn', // Vai (Latin) Vai (Latn)
  // 'vai-Latn-LR', // Vai (Latin, Liberia) Vai (Latn, Laibhiya)
  // 'vai-Vaii', // Vai (Vai) ꕙꔤ (Vaii)
  // 'vai-Vaii-LR', // Vai (Vai, Liberia) ꕙꔤ (Vaii, ꕞꔤꔫꕩ)
  vi: LOCALE_KEY.ViVn, // Vietnamese Tiếng Việt
  'vi-VN': LOCALE_KEY.ViVn, // Vietnamese (Vietnam) Tiếng Việt (Việt Nam)
  // 'vun', // Vunjo Kyivunjo
  // 'vun-TZ', // Vunjo (Tanzania) Kyivunjo (Tanzania)
  // 'wae', // Walser Walser
  // 'wae-CH', // Walser (Switzerland) Walser (Schwiz)
  // 'wo', // Wolof Wolof
  // 'wo-SN', // Wolof (Senegal) Wolof (Senegaal)
  // 'xog', // Soga Olusoga
  // 'xog-UG', // Soga (Uganda) Olusoga (Yuganda)
  // 'yav', // Yangben nuasue
  // 'yav-CM', // Yangben (Cameroon) nuasue (Kemelún)
  // 'yi', // Yiddish ייִדיש
  // 'yi-001', // Yiddish (World) ייִדיש (וועלט)
  // 'yo', // Yoruba Èdè Yorùbá
  // 'yo-BJ', // Yoruba (Benin) Èdè Yorùbá (Orílɛ́ède Bɛ̀nɛ̀)
  // 'yo-NG', // Yoruba (Nigeria) Èdè Yorùbá (Orílẹ́ède Nàìjíríà)
  yue: LOCALE_KEY.ZhHk, // Cantonese 粵語
  'yue-Hans': LOCALE_KEY.ZhCn, // Cantonese (Simplified) 粤语 (简体)
  'yue-Hans-CN': LOCALE_KEY.ZhCn, // Cantonese (Simplified, China) 粤语 (简体，中华人民共和国)
  'yue-Hant': LOCALE_KEY.ZhHk, // Cantonese (Traditional) 粵語 (繁體)
  'yue-Hant-HK': LOCALE_KEY.ZhHk, // Cantonese (Traditional, Hong Kong SAR China) 粵語 (繁體，中華人民共和國香港特別行政區)
  // 'zgh', // Standard Moroccan Tamazight ⵜⴰⵎⴰⵣⵉⵖⵜ
  // 'zgh-MA', // Standard Moroccan Tamazight (Morocco) ⵜⴰⵎⴰⵣⵉⵖⵜ (ⵍⵎⵖⵔⵉⴱ)
  zh: LOCALE_KEY.ZhCn, // Chinese 中文
  'zh-Hans': LOCALE_KEY.ZhCn, // Chinese (Simplified) 中文（简体） Simplified Chinese
  'zh-Hans-CN': LOCALE_KEY.ZhCn, // Chinese (Simplified, China) 中文（简体，中国） Simplified Chinese (China)
  'zh-Hans-HK': LOCALE_KEY.ZhCn, // 中文（简体，中国香港特别行政区） Simplified Chinese (Hong Kong SAR China)
  'zh-Hans-MO': LOCALE_KEY.ZhCn, // 中文（简体，中国澳门特别行政区） Simplified Chinese (Macau SAR China)
  'zh-Hans-SG': LOCALE_KEY.ZhCn, // Chinese (Simplified, Singapore) 中文（简体，新加坡） Simplified Chinese (Singapore)
  'zh-Hant': LOCALE_KEY.ZhHk, // Chinese (Traditional) 中文（繁體） Traditional Chinese
  'zh-Hant-HK': LOCALE_KEY.ZhHk, // 中文（繁體字，中國香港特別行政區） Traditional Chinese (Hong Kong SAR China)
  'zh-Hant-MO': LOCALE_KEY.ZhHk, // 中文（繁體字，中國澳門特別行政區） Traditional Chinese (Macau SAR China)
  'zh-Hant-TW': LOCALE_KEY.ZhHk, // Chinese (Traditional, Taiwan) 中文（繁體，台灣） Traditional Chinese (Taiwan)
  zu: LOCALE_KEY.ZuZa, // Zulu isiZulu
  'zu-ZA': LOCALE_KEY.ZuZa, // Zulu (South Africa) isiZulu (iNingizimu Afrika)
} as const satisfies Record<string, LocaleValue>;

/** Union of Browser locale keys */
export type BrowserLocaleKey = keyof typeof LOCALE_BROWSER_MAP;

/**
 * Native language names, used to render options to users
 * Language options for end-users should be written in own language
 */
export const NATIVE_LANGUAGE_NAMES = {
  /* English */
  [LOCALE_KEY.En]: 'English',
  /* Arabic */
  [LOCALE_KEY.Ar]: 'العربية',
  /* French */
  [LOCALE_KEY.Fr]: 'Français',
  /* German */
  [LOCALE_KEY.De]: 'Deutsch',
  /* Spanish */
  [LOCALE_KEY.Es]: 'Español',
  /* Italian */
  [LOCALE_KEY.It]: 'Italiano',
  /* Japanese */
  [LOCALE_KEY.Ja]: '日本語',
  /* Russian */
  [LOCALE_KEY.Ru]: 'Русский язык',
  /* Arabic UAE */
  [LOCALE_KEY.ArAe]: 'العربية (الإمارات العربية المتحدة)',
  /* French */
  [LOCALE_KEY.FrFr]: 'Français (France)',
  /* German */
  [LOCALE_KEY.DeDe]: 'Deutsch (Deutschland)',
  /* Italian */
  [LOCALE_KEY.ItIt]: 'Italiano (Italia)',
  /* Afrikaans */
  [LOCALE_KEY.AfZz]: 'Afrikaans',
  /* Bulgarian */
  [LOCALE_KEY.BgBg]: 'български',
  /* Chinese Simplified */
  [LOCALE_KEY.ZhCn]: '汉语',
  /* Croatian */
  [LOCALE_KEY.HrHr]: 'Hrvatski',
  /* Czech */
  [LOCALE_KEY.CsCz]: 'Čeština',
  /* Danish */
  [LOCALE_KEY.DaDk]: 'Dansk',
  /* English (UK) */
  [LOCALE_KEY.EnGb]: 'English (UK)',
  /* English (Canada) */
  [LOCALE_KEY.EnCa]: 'English (Canada)',
  /* English (UAE) */
  [LOCALE_KEY.EnAe]: 'English (UAE)',
  /* Finnish */
  [LOCALE_KEY.FiFi]: 'Suomi',
  /* Greek */
  [LOCALE_KEY.ElGr]: 'ελληνικά',
  /* Hindi */
  [LOCALE_KEY.HiIn]: 'हिन्दी',
  /* Hungarian */
  [LOCALE_KEY.HuHu]: 'Magyar',
  /* Indonesian */
  [LOCALE_KEY.IdId]: 'Bahasa Indonesia',
  /* Japanese */
  [LOCALE_KEY.JaJp]: '日本語',
  /* Korean */
  [LOCALE_KEY.KoKr]: '한국어',
  /* Lithuanian */
  [LOCALE_KEY.LtLt]: 'Lietuvių',
  /* Malay */
  [LOCALE_KEY.MsMy]: 'Bahasa Melayu',
  /* Marathi */
  [LOCALE_KEY.MrIn]: 'मराठी',
  /* Norwegian Bokmål */
  [LOCALE_KEY.NbNi]: 'Bokmål',
  /* Polish */
  [LOCALE_KEY.PlPl]: 'Polski',
  /* Portuguese (Brazil) */
  [LOCALE_KEY.PtBr]: 'Português (Brasil)',
  /* Portuguese (Portugal) */
  [LOCALE_KEY.PtPt]: 'Português (Portugal)',
  /* Romanian */
  [LOCALE_KEY.RoRo]: 'Română',
  /* Russian */
  [LOCALE_KEY.RuRu]: 'Русский язык',
  /* Latn-Serbian (Latin) */
  [LOCALE_KEY.SrLatnRs]: 'Srpski',
  /* Swedish */
  [LOCALE_KEY.SvSe]: 'Svenska',
  /* Tamil */
  [LOCALE_KEY.TaIn]: 'தமிழ்',
  /* Thai */
  [LOCALE_KEY.ThTh]: 'ภาษาไทย',
  /* Turkish */
  [LOCALE_KEY.TrTr]: 'Türkçe',
  /* Ukrainian */
  [LOCALE_KEY.UkUa]: 'українська мова',
  /* Vietnamese */
  [LOCALE_KEY.ViVn]: 'Tiếng Việt',
  /* Zulu */
  [LOCALE_KEY.ZuZa]: 'isiZulu',
  /* USA */
  [LOCALE_KEY.EnUs]: 'English (US)',
  /* Australia */
  [LOCALE_KEY.EnAu]: 'English (Australia)',
  /* Belgium */
  [LOCALE_KEY.FrBe]: 'Français (Belgique)',
  /* Quebec */
  [LOCALE_KEY.FrCa]: 'Français (Québec)',
  /* Ireland */
  [LOCALE_KEY.EnIe]: 'English (Ireland)',
  /* Dutch */
  [LOCALE_KEY.NlNl]: 'Nederlands',
  /* Dutch (Belgium) */
  [LOCALE_KEY.NlBe]: 'Nederlands (België)',
  /* Spanish (Castilian) */
  [LOCALE_KEY.EsEs]: 'Español (Castellano)',
  /* Spanish (Latin America & Caribbean) */
  [LOCALE_KEY.Es419]: 'Español (América Latina)',
  /* Chinese (Traditional) */
  [LOCALE_KEY.ZhHk]: '漢語',
  /** Austrian German */
  [LOCALE_KEY.DeAt]: 'Österreichisches Standarddeutsch,',
  /** Swiss German */
  [LOCALE_KEY.DeCh]: 'Schwiizerdütsch',
  /** Swiss Italian */
  [LOCALE_KEY.ItCh]: 'Dialetto Svizzero',
  /** French (Switzerland) */
  [LOCALE_KEY.FrCh]: 'Français de Suisse',
  /** Hebrew (Israel) */
  [LOCALE_KEY.HeIl]: 'עִבְרִית',
  /* New Zealand */
  [LOCALE_KEY.EnNz]: 'English (New Zealand)',
  /** Estonian (Estonia) */
  [LOCALE_KEY.EtEe]: 'Eesti',
  /** Icelandic (Iceland) */
  [LOCALE_KEY.IsIs]: 'Íslenska',
  /** Latvian (Latvia) */
  [LOCALE_KEY.LvLv]: 'Latviešu',
  /** Maltese (Malta) */
  [LOCALE_KEY.MtMt]: 'Malti',
  /** Slovak (Slovakia) */
  [LOCALE_KEY.SkSk]: 'Slovenčina',
  /** Slovenian (Slovenia) */
  [LOCALE_KEY.SlSl]: 'Slovenščina',
} as const satisfies Record<LocaleValue, string>;

/* eslint-enable max-lines */
