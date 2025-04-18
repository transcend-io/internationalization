/* eslint-disable max-lines */
// TODO: Remove old object here once dependencies are switched to LOCALE_KEY
/**
 * The language identifier keys
 *
 * @see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
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
 * @see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
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
type AwsTranslationKey = keyof typeof AWS_SUPPORTED_TRANSLATIONS;
/** Union of all AWS translation enum values */
type AwsTranslationValue =
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
  [LOCALE_KEY.ZuZa]: TRANSCEND_SUPPORTED_TRANSLATIONS.English, // TODO: this translation is just english?
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
  'IsIs',
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
 * anything commented and marked TO_DO is for languages that AWS supports but we do not
 * all other comments are to leave in those browser codes in case AWS updates to support them
 */
export const LOCALE_BROWSER_MAP = {
  af: LOCALE_KEY.AfZz, // Afrikaans Afrikaans
  af_NA: LOCALE_KEY.AfZz, // Afrikaans (Namibia) Afrikaans (Namibië)
  af_ZA: LOCALE_KEY.AfZz, // Afrikaans (South Africa) Afrikaans (Suid-Afrika)
  // 'agq', // Aghem Aghem
  // 'agq_CM', // Aghem (Cameroon) Aghem (Kàmàlûŋ)
  // 'ak', // Akan Akan
  // 'ak_GH', // Akan (Ghana) Akan (Gaana)
  // 'am', // Amharic አማርኛ TODO
  // 'am_ET', // Amharic (Ethiopia) አማርኛ (ኢትዮጵያ) TODO
  ar: LOCALE_KEY.Ar, // Arabic العربية
  ar_001: LOCALE_KEY.Ar, // Arabic (World) العربية (العالم) Modern Standard Arabic
  ar_AE: LOCALE_KEY.ArAe, // Arabic (United Arab Emirates) العربية (الإمارات العربية المتحدة)
  ar_BH: LOCALE_KEY.Ar, // Arabic (Bahrain) العربية (البحرين)
  ar_DJ: LOCALE_KEY.Ar, // Arabic (Djibouti) العربية (جيبوتي)
  ar_DZ: LOCALE_KEY.Ar, // Arabic (Algeria) العربية (الجزائر)
  ar_EG: LOCALE_KEY.Ar, // Arabic (Egypt) العربية (مصر)
  ar_EH: LOCALE_KEY.Ar, // Arabic (Western Sahara) العربية (الصحراء الغربية)
  ar_ER: LOCALE_KEY.Ar, // Arabic (Eritrea) العربية (إريتريا)
  ar_IL: LOCALE_KEY.Ar, // Arabic (Israel) العربية (إسرائيل)
  ar_IQ: LOCALE_KEY.Ar, // Arabic (Iraq) العربية (العراق)
  ar_JO: LOCALE_KEY.Ar, // Arabic (Jordan) العربية (الأردن)
  ar_KM: LOCALE_KEY.Ar, // Arabic (Comoros) العربية (جزر القمر)
  ar_KW: LOCALE_KEY.Ar, // Arabic (Kuwait) العربية (الكويت)
  ar_LB: LOCALE_KEY.Ar, // Arabic (Lebanon) العربية (لبنان)
  ar_LY: LOCALE_KEY.Ar, // Arabic (Libya) العربية (ليبيا)
  ar_MA: LOCALE_KEY.Ar, // Arabic (Morocco) العربية (المغرب)
  ar_MR: LOCALE_KEY.Ar, // Arabic (Mauritania) العربية (موريتانيا)
  ar_OM: LOCALE_KEY.Ar, // Arabic (Oman) العربية (عُمان)
  ar_PS: LOCALE_KEY.Ar, // Arabic (Palestinian Territories) العربية (الأراضي الفلسطينية)
  ar_QA: LOCALE_KEY.Ar, // Arabic (Qatar) العربية (قطر)
  ar_SA: LOCALE_KEY.Ar, // Arabic (Saudi Arabia) العربية (المملكة العربية السعودية)
  ar_SD: LOCALE_KEY.Ar, // Arabic (Sudan) العربية (السودان)
  ar_SO: LOCALE_KEY.Ar, // Arabic (Somalia) العربية (الصومال)
  ar_SS: LOCALE_KEY.Ar, // Arabic (South Sudan) العربية (جنوب السودان)
  ar_SY: LOCALE_KEY.Ar, // Arabic (Syria) العربية (سوريا)
  ar_TD: LOCALE_KEY.Ar, // Arabic (Chad) العربية (تشاد)
  ar_TN: LOCALE_KEY.Ar, // Arabic (Tunisia) العربية (تونس)
  ar_YE: LOCALE_KEY.Ar, // Arabic (Yemen) العربية (اليمن)
  // 'as', // Assamese অসমীয়া
  // 'as_IN', // Assamese (India) অসমীয়া (ভারত)
  // 'asa', // Asu Kipare
  // 'asa_TZ', // Asu (Tanzania) Kipare (Tadhania)
  // 'ast', // Asturian asturianu
  // 'ast_ES', // Asturian (Spain) asturianu (España)
  // 'az', // Azerbaijani azərbaycan TODO
  // 'az_Cyrl', // Azerbaijani (Cyrillic) азәрбајҹан (Кирил) TODO
  // 'az_Cyrl_AZ', // Azerbaijani (Cyrillic, Azerbaijan) азәрбајҹан (Кирил, Азәрбајҹан) TODO
  // 'az_Latn', // Azerbaijani (Latin) azərbaycan (latın) TODO
  // 'az_Latn_AZ', // Azerbaijani (Latin, Azerbaijan) azərbaycan (latın, Azərbaycan) TODO
  // 'bas', // Basaa Ɓàsàa
  // 'bas_CM', // Basaa (Cameroon) Ɓàsàa (Kàmɛ̀rûn)
  // 'be', // Belarusian беларуская
  // 'be_BY', // Belarusian (Belarus) беларуская (Беларусь)
  // 'bem', // Bemba Ichibemba
  // 'bem_ZM', // Bemba (Zambia) Ichibemba (Zambia)
  // 'bez', // Bena Hibena
  // 'bez_TZ', // Bena (Tanzania) Hibena (Hutanzania)
  bg: LOCALE_KEY.BgBg, // Bulgarian български
  bg_BG: LOCALE_KEY.BgBg, // Bulgarian (Bulgaria) български (България)
  // 'bm', // Bambara bamanakan
  // 'bm_ML', // Bambara (Mali) bamanakan (Mali)
  // 'bn', // Bangla বাংলা
  // 'bn_BD', // Bangla (Bangladesh) বাংলা (বাংলাদেশ)
  // 'bn_IN', // Bangla (India) বাংলা (ভারত)
  // 'bo', // Tibetan བོད་སྐད་
  // 'bo_CN', // Tibetan (China) བོད་སྐད་ (རྒྱ་ནག)
  // 'bo_IN', // Tibetan (India) བོད་སྐད་ (རྒྱ་གར་)
  // 'br', // Breton brezhoneg
  // 'br_FR', // Breton (France) brezhoneg (Frañs)
  // 'brx', // Bodo बड़ो
  // 'brx_IN', // Bodo (India) बड़ो (भारत)
  // 'bs', // Bosnian bosanski TODO
  // 'bs_Cyrl', // Bosnian (Cyrillic) босански (ћирилица) TODO
  // 'bs_Cyrl_BA', // Bosnian (Cyrillic, Bosnia & Herzegovina) босански (ћирилица, Босна и Херцеговина) TODO
  // 'bs_Latn', // Bosnian (Latin) bosanski (latinica) TODO
  // 'bs_Latn_BA', // Bosnian (Latin, Bosnia & Herzegovina) bosanski (latinica, Bosna i Hercegovina) TODO
  // 'ca', // Catalan català TODO
  // 'ca_AD', // Catalan (Andorra) català (Andorra) TODO
  // 'ca_ES', // Catalan (Spain) català (Espanya) TODO
  // 'ca_FR', // Catalan (France) català (França) TODO
  // 'ca_IT', // Catalan (Italy) català (Itàlia) TODO
  // 'ccp', // Chakma 𑄌𑄋𑄴𑄟𑄳𑄦
  // 'ccp_BD', // Chakma (Bangladesh) 𑄌𑄋𑄴𑄟𑄳𑄦 (𑄝𑄁𑄣𑄘𑄬𑄌𑄴)
  // 'ccp_IN', // Chakma (India) 𑄌𑄋𑄴𑄟𑄳𑄦 (𑄞𑄢𑄧𑄖𑄴)
  // 'ce', // Chechen нохчийн
  // 'ce_RU', // Chechen (Russia) нохчийн (Росси)
  // 'cgg', // Chiga Rukiga
  // 'cgg_UG', // Chiga (Uganda) Rukiga (Uganda)
  // 'chr', // Cherokee ᏣᎳᎩ
  // 'chr_US', // Cherokee (United States) ᏣᎳᎩ (ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᏍᎦᏚᎩ)
  // 'ckb', // Central Kurdish کوردیی ناوەندی
  // 'ckb_IQ', // Central Kurdish (Iraq) کوردیی ناوەندی (عێراق)
  // 'ckb_IR', // Central Kurdish (Iran) کوردیی ناوەندی (ئێران)
  cs: LOCALE_KEY.CsCz, // Czech čeština
  cs_CZ: LOCALE_KEY.CsCz, // Czech (Czechia) čeština (Česko)
  // 'cy', // Welsh Cymraeg TODO
  // 'cy_GB', // Welsh (United Kingdom) Cymraeg (Y Deyrnas Unedig) TODO
  da: LOCALE_KEY.DaDk, // Danish dansk
  da_DK: LOCALE_KEY.DaDk, // Danish (Denmark) dansk (Danmark)
  da_GL: LOCALE_KEY.DaDk, // Danish (Greenland) dansk (Grønland)
  // 'dav', // Taita Kitaita
  // 'dav_KE', // Taita (Kenya) Kitaita (Kenya)
  de: LOCALE_KEY.De, // German Deutsch
  de_AT: LOCALE_KEY.DeAt, // German (Austria) Deutsch (Österreich) Austrian German
  de_BE: LOCALE_KEY.De, // German (Belgium) Deutsch (Belgien)
  de_CH: LOCALE_KEY.DeCh, // German (Switzerland) Deutsch (Schweiz) Swiss High German
  de_DE: LOCALE_KEY.DeDe, // German (Germany) Deutsch (Deutschland)
  de_IT: LOCALE_KEY.De, // German (Italy) Deutsch (Italien)
  de_LI: LOCALE_KEY.De, // German (Liechtenstein) Deutsch (Liechtenstein)
  de_LU: LOCALE_KEY.De, // German (Luxembourg) Deutsch (Luxemburg)
  // 'dje', // Zarma Zarmaciine
  // 'dje_NE', // Zarma (Niger) Zarmaciine (Nižer)
  // 'dsb', // Lower Sorbian dolnoserbšćina
  // 'dsb_DE', // Lower Sorbian (Germany) dolnoserbšćina (Nimska)
  // 'dua', // Duala duálá
  // 'dua_CM', // Duala (Cameroon) duálá (Cameroun)
  // 'dyo', // Jola-Fonyi joola
  // 'dyo_SN', // Jola-Fonyi (Senegal) joola (Senegal)
  // 'dz', // Dzongkha རྫོང་ཁ
  // 'dz_BT', // Dzongkha (Bhutan) རྫོང་ཁ། (འབྲུག།)
  // 'ebu', // Embu Kĩembu
  // 'ebu_KE', // Embu (Kenya) Kĩembu (Kenya)
  // 'ee', // Ewe Eʋegbe
  // 'ee_GH', // Ewe (Ghana) Eʋegbe (Ghana nutome)
  // 'ee_TG', // Ewe (Togo) Eʋegbe (Togo nutome)
  el: LOCALE_KEY.ElGr, // Greek Ελληνικά
  el_CY: LOCALE_KEY.ElGr, // Greek (Cyprus) Ελληνικά (Κύπρος)
  el_GR: LOCALE_KEY.ElGr, // Greek (Greece) Ελληνικά (Ελλάδα)
  en: LOCALE_KEY.En, // English English
  en_001: LOCALE_KEY.En, // English (World) English (World)
  en_150: LOCALE_KEY.En, // English (Europe) English (Europe)
  en_AG: LOCALE_KEY.En, // English (Antigua & Barbuda) English (Antigua & Barbuda)
  en_AI: LOCALE_KEY.En, // English (Anguilla) English (Anguilla)
  en_AS: LOCALE_KEY.En, // English (American Samoa) English (American Samoa)
  en_AT: LOCALE_KEY.En, // English (Austria) English (Austria)
  en_AU: LOCALE_KEY.EnAu, // English (Australia) English (Australia) Australian English
  en_BB: LOCALE_KEY.En, // English (Barbados) English (Barbados)
  en_BE: LOCALE_KEY.En, // English (Belgium) English (Belgium)
  en_BI: LOCALE_KEY.En, // English (Burundi) English (Burundi)
  en_BM: LOCALE_KEY.En, // English (Bermuda) English (Bermuda)
  en_BS: LOCALE_KEY.En, // English (Bahamas) English (Bahamas)
  en_BW: LOCALE_KEY.En, // English (Botswana) English (Botswana)
  en_BZ: LOCALE_KEY.En, // English (Belize) English (Belize)
  en_CA: LOCALE_KEY.En, // English (Canada) English (Canada) Canadian English
  en_CC: LOCALE_KEY.En, // English (Cocos [Keeling] Islands) English (Cocos [Keeling] Islands)
  en_CH: LOCALE_KEY.En, // English (Switzerland) English (Switzerland)
  en_CK: LOCALE_KEY.En, // English (Cook Islands) English (Cook Islands)
  en_CM: LOCALE_KEY.En, // English (Cameroon) English (Cameroon)
  en_CX: LOCALE_KEY.En, // English (Christmas Island) English (Christmas Island)
  en_CY: LOCALE_KEY.En, // English (Cyprus) English (Cyprus)
  en_DE: LOCALE_KEY.En, // English (Germany) English (Germany)
  en_DG: LOCALE_KEY.En, // English (Diego Garcia) English (Diego Garcia)
  en_DK: LOCALE_KEY.En, // English (Denmark) English (Denmark)
  en_DM: LOCALE_KEY.En, // English (Dominica) English (Dominica)
  en_ER: LOCALE_KEY.En, // English (Eritrea) English (Eritrea)
  en_FI: LOCALE_KEY.En, // English (Finland) English (Finland)
  en_FJ: LOCALE_KEY.En, // English (Fiji) English (Fiji)
  en_FK: LOCALE_KEY.En, // English (Falkland Islands) English (Falkland Islands)
  en_FM: LOCALE_KEY.En, // English (Micronesia) English (Micronesia)
  en_GB: LOCALE_KEY.EnGb, // English (United Kingdom) English (United Kingdom) British English
  en_GD: LOCALE_KEY.En, // English (Grenada) English (Grenada)
  en_GG: LOCALE_KEY.En, // English (Guernsey) English (Guernsey)
  en_GH: LOCALE_KEY.En, // English (Ghana) English (Ghana)
  en_GI: LOCALE_KEY.En, // English (Gibraltar) English (Gibraltar)
  en_GM: LOCALE_KEY.En, // English (Gambia) English (Gambia)
  en_GU: LOCALE_KEY.En, // English (Guam) English (Guam)
  en_GY: LOCALE_KEY.En, // English (Guyana) English (Guyana)
  en_HK: LOCALE_KEY.En, // English (Hong Kong SAR China) English (Hong Kong SAR China)
  en_IE: LOCALE_KEY.EnIe, // English (Ireland) English (Ireland)
  en_IL: LOCALE_KEY.En, // English (Israel) English (Israel)
  en_IM: LOCALE_KEY.En, // English (Isle of Man) English (Isle of Man)
  en_IN: LOCALE_KEY.En, // English (India) English (India)
  en_IO: LOCALE_KEY.En, // English (British Indian Ocean Territory) English (British Indian Ocean Territory)
  en_JE: LOCALE_KEY.En, // English (Jersey) English (Jersey)
  en_JM: LOCALE_KEY.En, // English (Jamaica) English (Jamaica)
  en_KE: LOCALE_KEY.En, // English (Kenya) English (Kenya)
  en_KI: LOCALE_KEY.En, // English (Kiribati) English (Kiribati)
  en_KN: LOCALE_KEY.En, // English (St. Kitts & Nevis) English (St. Kitts & Nevis)
  en_KY: LOCALE_KEY.En, // English (Cayman Islands) English (Cayman Islands)
  en_LC: LOCALE_KEY.En, // English (St. Lucia) English (St. Lucia)
  en_LR: LOCALE_KEY.En, // English (Liberia) English (Liberia)
  en_LS: LOCALE_KEY.En, // English (Lesotho) English (Lesotho)
  en_MG: LOCALE_KEY.En, // English (Madagascar) English (Madagascar)
  en_MH: LOCALE_KEY.En, // English (Marshall Islands) English (Marshall Islands)
  en_MO: LOCALE_KEY.En, // English (Macau SAR China) English (Macau SAR China)
  en_MP: LOCALE_KEY.En, // English (Northern Mariana Islands) English (Northern Mariana Islands)
  en_MS: LOCALE_KEY.En, // English (Montserrat) English (Montserrat)
  en_MT: LOCALE_KEY.En, // English (Malta) English (Malta)
  en_MU: LOCALE_KEY.En, // English (Mauritius) English (Mauritius)
  en_MW: LOCALE_KEY.En, // English (Malawi) English (Malawi)
  en_MY: LOCALE_KEY.En, // English (Malaysia) English (Malaysia)
  en_NA: LOCALE_KEY.En, // English (Namibia) English (Namibia)
  en_NF: LOCALE_KEY.En, // English (Norfolk Island) English (Norfolk Island)
  en_NG: LOCALE_KEY.En, // English (Nigeria) English (Nigeria)
  en_NL: LOCALE_KEY.En, // English (Netherlands) English (Netherlands)
  en_NR: LOCALE_KEY.En, // English (Nauru) English (Nauru)
  en_NU: LOCALE_KEY.En, // English (Niue) English (Niue)
  en_NZ: LOCALE_KEY.EnNz, // English (New Zealand) English (New Zealand)
  en_PG: LOCALE_KEY.En, // English (Papua New Guinea) English (Papua New Guinea)
  en_PH: LOCALE_KEY.En, // English (Philippines) English (Philippines)
  en_PK: LOCALE_KEY.En, // English (Pakistan) English (Pakistan)
  en_PN: LOCALE_KEY.En, // English (Pitcairn Islands) English (Pitcairn Islands)
  en_PR: LOCALE_KEY.En, // English (Puerto Rico) English (Puerto Rico)
  en_PW: LOCALE_KEY.En, // English (Palau) English (Palau)
  en_RW: LOCALE_KEY.En, // English (Rwanda) English (Rwanda)
  en_SB: LOCALE_KEY.En, // English (Solomon Islands) English (Solomon Islands)
  en_SC: LOCALE_KEY.En, // English (Seychelles) English (Seychelles)
  en_SD: LOCALE_KEY.En, // English (Sudan) English (Sudan)
  en_SE: LOCALE_KEY.En, // English (Sweden) English (Sweden)
  en_SG: LOCALE_KEY.En, // English (Singapore) English (Singapore)
  en_SH: LOCALE_KEY.En, // English (St. Helena) English (St. Helena)
  en_SI: LOCALE_KEY.En, // English (Slovenia) English (Slovenia)
  en_SL: LOCALE_KEY.En, // English (Sierra Leone) English (Sierra Leone)
  en_SS: LOCALE_KEY.En, // English (South Sudan) English (South Sudan)
  en_SX: LOCALE_KEY.En, // English (Sint Maarten) English (Sint Maarten)
  en_SZ: LOCALE_KEY.En, // English (Swaziland) English (Swaziland)
  en_TC: LOCALE_KEY.En, // English (Turks & Caicos Islands) English (Turks & Caicos Islands)
  en_TK: LOCALE_KEY.En, // English (Tokelau) English (Tokelau)
  en_TO: LOCALE_KEY.En, // English (Tonga) English (Tonga)
  en_TT: LOCALE_KEY.En, // English (Trinidad & Tobago) English (Trinidad & Tobago)
  en_TV: LOCALE_KEY.En, // English (Tuvalu) English (Tuvalu)
  en_TZ: LOCALE_KEY.En, // English (Tanzania) English (Tanzania)
  en_UG: LOCALE_KEY.En, // English (Uganda) English (Uganda)
  en_UM: LOCALE_KEY.En, // English (U.S. Outlying Islands) English (U.S. Outlying Islands)
  en_US: LOCALE_KEY.EnUs, // English (United States) English (United States) American English
  en_US_POSIX: LOCALE_KEY.EnUs, // English (United States, Computer) English (United States, Computer) American English (Computer)
  en_VC: LOCALE_KEY.En, // English (St. Vincent & Grenadines) English (St. Vincent & Grenadines)
  en_VG: LOCALE_KEY.En, // English (British Virgin Islands) English (British Virgin Islands)
  en_VI: LOCALE_KEY.En, // English (U.S. Virgin Islands) English (U.S. Virgin Islands)
  en_VU: LOCALE_KEY.En, // English (Vanuatu) English (Vanuatu)
  en_WS: LOCALE_KEY.En, // English (Samoa) English (Samoa)
  en_ZA: LOCALE_KEY.En, // English (South Africa) English (South Africa)
  en_ZM: LOCALE_KEY.En, // English (Zambia) English (Zambia)
  en_ZW: LOCALE_KEY.En, // English (Zimbabwe) English (Zimbabwe)
  // 'eo', // Esperanto esperanto
  es: LOCALE_KEY.Es, // Spanish español
  es_419: LOCALE_KEY.Es419, // Spanish (Latin America) español (Latinoamérica) Latin American Spanish
  es_AR: LOCALE_KEY.Es419, // Spanish (Argentina) español (Argentina)
  es_BO: LOCALE_KEY.Es419, // Spanish (Bolivia) español (Bolivia)
  es_BR: LOCALE_KEY.Es419, // Spanish (Brazil) español (Brasil)
  es_BZ: LOCALE_KEY.Es419, // Spanish (Belize) español (Belice)
  es_CL: LOCALE_KEY.Es419, // Spanish (Chile) español (Chile)
  es_CO: LOCALE_KEY.Es419, // Spanish (Colombia) español (Colombia)
  es_CR: LOCALE_KEY.Es419, // Spanish (Costa Rica) español (Costa Rica)
  es_CU: LOCALE_KEY.Es419, // Spanish (Cuba) español (Cuba)
  es_DO: LOCALE_KEY.Es419, // Spanish (Dominican Republic) español (República Dominicana)
  es_EA: LOCALE_KEY.Es419, // Spanish (Ceuta & Melilla) español (Ceuta y Melilla)
  es_EC: LOCALE_KEY.Es419, // Spanish (Ecuador) español (Ecuador)
  es_ES: LOCALE_KEY.EsEs, // Spanish (Spain) español (España) European Spanish
  es_GQ: LOCALE_KEY.Es419, // Spanish (Equatorial Guinea) español (Guinea Ecuatorial)
  es_GT: LOCALE_KEY.Es419, // Spanish (Guatemala) español (Guatemala)
  es_HN: LOCALE_KEY.Es419, // Spanish (Honduras) español (Honduras)
  es_IC: LOCALE_KEY.Es419, // Spanish (Canary Islands) español (Canarias)
  es_MX: LOCALE_KEY.Es419, // Spanish (Mexico) español (México) Mexican Spanish
  es_NI: LOCALE_KEY.Es419, // Spanish (Nicaragua) español (Nicaragua)
  es_PA: LOCALE_KEY.Es419, // Spanish (Panama) español (Panamá)
  es_PE: LOCALE_KEY.Es419, // Spanish (Peru) español (Perú)
  es_PH: LOCALE_KEY.Es419, // Spanish (Philippines) español (Filipinas)
  es_PR: LOCALE_KEY.Es419, // Spanish (Puerto Rico) español (Puerto Rico)
  es_PY: LOCALE_KEY.Es419, // Spanish (Paraguay) español (Paraguay)
  es_SV: LOCALE_KEY.Es419, // Spanish (El Salvador) español (El Salvador)
  es_US: LOCALE_KEY.Es419, // Spanish (United States) español (Estados Unidos)
  es_UY: LOCALE_KEY.Es419, // Spanish (Uruguay) español (Uruguay)
  es_VE: LOCALE_KEY.Es419, // Spanish (Venezuela) español (Venezuela)
  et: LOCALE_KEY.EtEe, // Estonian eesti
  et_EE: LOCALE_KEY.EtEe, // Estonian (Estonia) eesti (Eesti)
  // 'eu', // Basque euskara
  // 'eu_ES', // Basque (Spain) euskara (Espainia)
  // 'ewo', // Ewondo ewondo
  // 'ewo_CM', // Ewondo (Cameroon) ewondo (Kamərún)
  // 'fa', // Persian فارسی TODO
  // 'fa_AF', // Persian (Afghanistan) فارسی (افغانستان) Dari TODO
  // 'fa_IR', // Persian (Iran) فارسی (ایران) TODO
  // 'ff', // Fulah Pulaar
  // 'ff_CM', // Fulah (Cameroon) Pulaar (Kameruun)
  // 'ff_GN', // Fulah (Guinea) Pulaar (Gine)
  // 'ff_MR', // Fulah (Mauritania) Pulaar (Muritani)
  // 'ff_SN', // Fulah (Senegal) Pulaar (Senegaal)
  fi: LOCALE_KEY.FiFi, // Finnish suomi
  fi_FI: LOCALE_KEY.FiFi, // Finnish (Finland) suomi (Suomi)
  // 'fil', // Filipino Filipino TODO
  // 'fil_PH', // Filipino (Philippines) Filipino (Pilipinas) TODO
  // 'fo', // Faroese føroyskt
  // 'fo_DK', // Faroese (Denmark) føroyskt (Danmark)
  // 'fo_FO', // Faroese (Faroe Islands) føroyskt (Føroyar)
  fr: LOCALE_KEY.Fr, // French français
  fr_BE: LOCALE_KEY.FrBe, // French (Belgium) français (Belgique)
  fr_BF: LOCALE_KEY.Fr, // French (Burkina Faso) français (Burkina Faso)
  fr_BI: LOCALE_KEY.Fr, // French (Burundi) français (Burundi)
  fr_BJ: LOCALE_KEY.Fr, // French (Benin) français (Bénin)
  fr_BL: LOCALE_KEY.Fr, // French (St. Barthélemy) français (Saint-Barthélemy)
  fr_CA: LOCALE_KEY.FrCa, // French (Canada) français (Canada) Canadian French
  fr_CD: LOCALE_KEY.Fr, // French (Congo - Kinshasa) français (Congo-Kinshasa)
  fr_CF: LOCALE_KEY.Fr, // French (Central African Republic) français (République centrafricaine)
  fr_CG: LOCALE_KEY.Fr, // French (Congo - Brazzaville) français (Congo-Brazzaville)
  fr_CH: LOCALE_KEY.FrCh, // French (Switzerland) français (Suisse) Swiss French
  fr_CI: LOCALE_KEY.Fr, // French (Côte d’Ivoire) français (Côte d’Ivoire)
  fr_CM: LOCALE_KEY.Fr, // French (Cameroon) français (Cameroun)
  fr_DJ: LOCALE_KEY.Fr, // French (Djibouti) français (Djibouti)
  fr_DZ: LOCALE_KEY.Fr, // French (Algeria) français (Algérie)
  fr_FR: LOCALE_KEY.FrFr, // French (France) français (France)
  fr_GA: LOCALE_KEY.Fr, // French (Gabon) français (Gabon)
  fr_GF: LOCALE_KEY.Fr, // French (French Guiana) français (Guyane française)
  fr_GN: LOCALE_KEY.Fr, // French (Guinea) français (Guinée)
  fr_GP: LOCALE_KEY.Fr, // French (Guadeloupe) français (Guadeloupe)
  fr_GQ: LOCALE_KEY.Fr, // French (Equatorial Guinea) français (Guinée équatoriale)
  fr_HT: LOCALE_KEY.Fr, // French (Haiti) français (Haïti)
  fr_KM: LOCALE_KEY.Fr, // French (Comoros) français (Comores)
  fr_LU: LOCALE_KEY.Fr, // French (Luxembourg) français (Luxembourg)
  fr_MA: LOCALE_KEY.Fr, // French (Morocco) français (Maroc)
  fr_MC: LOCALE_KEY.Fr, // French (Monaco) français (Monaco)
  fr_MF: LOCALE_KEY.Fr, // French (St. Martin) français (Saint-Martin)
  fr_MG: LOCALE_KEY.Fr, // French (Madagascar) français (Madagascar)
  fr_ML: LOCALE_KEY.Fr, // French (Mali) français (Mali)
  fr_MQ: LOCALE_KEY.Fr, // French (Martinique) français (Martinique)
  fr_MR: LOCALE_KEY.Fr, // French (Mauritania) français (Mauritanie)
  fr_MU: LOCALE_KEY.Fr, // French (Mauritius) français (Maurice)
  fr_NC: LOCALE_KEY.Fr, // French (New Caledonia) français (Nouvelle-Calédonie)
  fr_NE: LOCALE_KEY.Fr, // French (Niger) français (Niger)
  fr_PF: LOCALE_KEY.Fr, // French (French Polynesia) français (Polynésie française)
  fr_PM: LOCALE_KEY.Fr, // French (St. Pierre & Miquelon) français (Saint-Pierre-et-Miquelon)
  fr_RE: LOCALE_KEY.Fr, // French (Réunion) français (La Réunion)
  fr_RW: LOCALE_KEY.Fr, // French (Rwanda) français (Rwanda)
  fr_SC: LOCALE_KEY.Fr, // French (Seychelles) français (Seychelles)
  fr_SN: LOCALE_KEY.Fr, // French (Senegal) français (Sénégal)
  fr_SY: LOCALE_KEY.Fr, // French (Syria) français (Syrie)
  fr_TD: LOCALE_KEY.Fr, // French (Chad) français (Tchad)
  fr_TG: LOCALE_KEY.Fr, // French (Togo) français (Togo)
  fr_TN: LOCALE_KEY.Fr, // French (Tunisia) français (Tunisie)
  fr_VU: LOCALE_KEY.Fr, // French (Vanuatu) français (Vanuatu)
  fr_WF: LOCALE_KEY.Fr, // French (Wallis & Futuna) français (Wallis-et-Futuna)
  fr_YT: LOCALE_KEY.Fr, // French (Mayotte) français (Mayotte)
  // 'fur', // Friulian furlan
  // 'fur_IT', // Friulian (Italy) furlan (Italie)
  // 'fy', // Western Frisian Fryskx
  // 'fy_NL', // Western Frisian (Netherlands) Frysk (Nederlân)
  // 'ga', // Irish Gaeilge TODO
  // 'ga_IE', // Irish (Ireland) Gaeilge (Éire) TODO
  // 'gd', // Scottish Gaelic Gàidhlig
  // 'gd_GB', // Scottish Gaelic (United Kingdom) Gàidhlig (An Rìoghachd Aonaichte)
  // 'gl', // Galician galego
  // 'gl_ES', // Galician (Spain) galego (España)
  gsw: LOCALE_KEY.DeCh, // Swiss German Schwiizertüütsch
  gsw_CH: LOCALE_KEY.DeCh, // Swiss German (Switzerland) Schwiizertüütsch (Schwiiz)
  gsw_FR: LOCALE_KEY.DeCh, // Swiss German (France) Schwiizertüütsch (Frankriich)
  gsw_LI: LOCALE_KEY.DeCh, // Swiss German (Liechtenstein) Schwiizertüütsch (Liächteschtäi)
  // 'gu', // Gujarati ગુજરાતી TODO
  // 'gu_IN', // Gujarati (India) ગુજરાતી (ભારત) TODO
  // 'guz', // Gusii Ekegusii
  // 'guz_KE', // Gusii (Kenya) Ekegusii (Kenya)
  // 'gv', // Manx Gaelg
  // 'gv_IM', // Manx (Isle of Man) Gaelg (Ellan Vannin)
  // 'ha', // Hausa Hausa TODO
  // 'ha_GH', // Hausa (Ghana) Hausa (Gana) TODO
  // 'ha_NE', // Hausa (Niger) Hausa (Nijar) TODO
  // 'ha_NG', // Hausa (Nigeria) Hausa (Najeriya) TODO
  // 'haw', // Hawaiian ʻŌlelo Hawaiʻi
  // 'haw_US', // Hawaiian (United States) ʻŌlelo Hawaiʻi (ʻAmelika Hui Pū ʻIa)
  he: LOCALE_KEY.HeIl, // Hebrew עברית
  he_IL: LOCALE_KEY.HeIl, // Hebrew (Israel) עברית (ישראל)
  hi: LOCALE_KEY.HiIn, // Hindi हिन्दी
  hi_IN: LOCALE_KEY.HiIn, // Hindi (India) हिन्दी (भारत)
  hr: LOCALE_KEY.HrHr, // Croatian hrvatski
  hr_BA: LOCALE_KEY.HrHr, // Croatian (Bosnia & Herzegovina) hrvatski (Bosna i Hercegovina)
  hr_HR: LOCALE_KEY.HrHr, // Croatian (Croatia) hrvatski (Hrvatska)
  // 'hsb', // Upper Sorbian hornjoserbšćina
  // 'hsb_DE', // Upper Sorbian (Germany) hornjoserbšćina (Němska)
  hu: LOCALE_KEY.HuHu, // Hungarian magyar
  hu_HU: LOCALE_KEY.HuHu, // Hungarian (Hungary) magyar (Magyarország)
  // 'hy', // Armenian հայերեն TODO
  // 'hy_AM', // Armenian (Armenia) հայերեն (Հայաստան) TODO
  id: LOCALE_KEY.IdId, // Indonesian Indonesia
  id_ID: LOCALE_KEY.IdId, // Indonesian (Indonesia) Indonesia (Indonesia)
  // 'ig', // Igbo Igbo
  // 'ig_NG', // Igbo (Nigeria) Igbo (Naịjịrịa)
  // 'ii', // Sichuan Yi ꆈꌠꉙ
  // 'ii_CN', // Sichuan Yi (China) ꆈꌠꉙ (ꍏꇩ)
  is: LOCALE_KEY.IsIs, // Icelandic íslenska
  is_IS: LOCALE_KEY.IsIs, // Icelandic (Iceland) íslenska (Ísland)
  it: LOCALE_KEY.It, // Italian italiano
  it_CH: LOCALE_KEY.ItCh, // Italian (Switzerland) italiano (Svizzera)
  it_IT: LOCALE_KEY.ItIt, // Italian (Italy) italiano (Italia)
  it_SM: LOCALE_KEY.ItIt, // Italian (San Marino) italiano (San Marino)
  it_VA: LOCALE_KEY.ItIt, // Italian (Vatican City) italiano (Città del Vaticano)
  ja: LOCALE_KEY.Ja, // Japanese 日本語
  ja_JP: LOCALE_KEY.JaJp, // Japanese (Japan) 日本語 (日本)
  // 'jgo', // Ngomba Ndaꞌa
  // 'jgo_CM', // Ngomba (Cameroon) Ndaꞌa (Kamɛlûn)
  // 'jmc', // Machame Kimachame
  // 'jmc_TZ', // Machame (Tanzania) Kimachame (Tanzania)
  // 'ka', // Georgian ქართული TODO
  // 'ka_GE', // Georgian (Georgia) ქართული (საქართველო) TODO
  // 'kab', // Kabyle Taqbaylit
  // 'kab_DZ', // Kabyle (Algeria) Taqbaylit (Lezzayer)
  // 'kam', // Kamba Kikamba
  // 'kam_KE', // Kamba (Kenya) Kikamba (Kenya)
  // 'kde', // Makonde Chimakonde
  // 'kde_TZ', // Makonde (Tanzania) Chimakonde (Tanzania)
  // 'kea', // Kabuverdianu kabuverdianu
  // 'kea_CV', // Kabuverdianu (Cape Verde) kabuverdianu (Kabu Verdi)
  // 'khq', // Koyra Chiini Koyra ciini
  // 'khq_ML', // Koyra Chiini (Mali) Koyra ciini (Maali)
  // 'ki', // Kikuyu Gikuyu
  // 'ki_KE', // Kikuyu (Kenya) Gikuyu (Kenya)
  // 'kk', // Kazakh қазақ тілі TODO
  // 'kk_KZ', // Kazakh (Kazakhstan) қазақ тілі (Қазақстан) TODO
  // 'kkj', // Kako kakɔ
  // 'kkj_CM', // Kako (Cameroon) kakɔ (Kamɛrun)
  // 'kl', // Kalaallisut kalaallisut
  // 'kl_GL', // Kalaallisut (Greenland) kalaallisut (Kalaallit Nunaat)
  // 'kln', // Kalenjin Kalenjin
  // 'kln_KE', // Kalenjin (Kenya) Kalenjin (Emetab Kenya)
  // 'km', // Khmer ខ្មែរ
  // 'km_KH', // Khmer (Cambodia) ខ្មែរ (កម្ពុជា)
  // 'kn', // Kannada ಕನ್ನಡ TODO
  // 'kn_IN', // Kannada (India) ಕನ್ನಡ (ಭಾರತ) TODO
  ko: LOCALE_KEY.KoKr, // Korean 한국어
  ko_KP: LOCALE_KEY.KoKr, // Korean (North Korea) 한국어(조선민주주의인민공화국)
  ko_KR: LOCALE_KEY.KoKr, // Korean (South Korea) 한국어(대한민국)
  // 'kok', // Konkani कोंकणी
  // 'kok_IN', // Konkani (India) कोंकणी (भारत)
  // 'ks', // Kashmiri کٲشُر
  // 'ks_IN', // Kashmiri (India) کٲشُر (ہِنٛدوستان)
  // 'ksb', // Shambala Kishambaa
  // 'ksb_TZ', // Shambala (Tanzania) Kishambaa (Tanzania)
  // 'ksf', // Bafia rikpa
  // 'ksf_CM', // Bafia (Cameroon) rikpa (kamɛrún)
  // 'ksh', // Colognian Kölsch
  // 'ksh_DE', // Colognian (Germany) Kölsch en Doütschland
  // 'kw', // Cornish kernewek
  // 'kw_GB', // Cornish (United Kingdom) kernewek (Rywvaneth Unys)
  // 'ky', // Kyrgyz кыргызча
  // 'ky_KG', // Kyrgyz (Kyrgyzstan) кыргызча (Кыргызстан)
  // 'lag', // Langi Kɨlaangi
  // 'lag_TZ', // Langi (Tanzania) Kɨlaangi (Taansanía)
  // 'lb', // Luxembourgish Lëtzebuergesch
  // 'lb_LU', // Luxembourgish (Luxembourg) Lëtzebuergesch (Lëtzebuerg)
  // 'lg', // Ganda Luganda
  // 'lg_UG', // Ganda (Uganda) Luganda (Yuganda)
  // 'lkt', // Lakota Lakȟólʼiyapi
  // 'lkt_US', // Lakota (United States) Lakȟólʼiyapi (Mílahaŋska Tȟamákȟočhe)
  // 'ln', // Lingala lingála
  // 'ln_AO', // Lingala (Angola) lingála (Angóla)
  // 'ln_CD', // Lingala (Congo - Kinshasa) lingála (Republíki ya Kongó Demokratíki)
  // 'ln_CF', // Lingala (Central African Republic) lingála (Repibiki ya Afríka ya Káti)
  // 'ln_CG', // Lingala (Congo - Brazzaville) lingála (Kongo)
  // 'lo', // Lao ລາວ
  // 'lo_LA', // Lao (Laos) ລາວ (ລາວ)
  // 'lrc', // Northern Luri لۊری شومالی
  // 'lrc_IQ', // Northern Luri (Iraq) لۊری شومالی (IQ)
  // 'lrc_IR', // Northern Luri (Iran) لۊری شومالی (IR)
  lt: LOCALE_KEY.LtLt, // Lithuanian lietuvių
  lt_LT: LOCALE_KEY.LtLt, // Lithuanian (Lithuania) lietuvių (Lietuva)
  // 'lu', // Luba-Katanga Tshiluba
  // 'lu_CD', // Luba-Katanga (Congo - Kinshasa) Tshiluba (Ditunga wa Kongu)
  // 'luo', // Luo Dholuo
  // 'luo_KE', // Luo (Kenya) Dholuo (Kenya)
  // 'luy', // Luyia Luluhia
  // 'luy_KE', // Luyia (Kenya) Luluhia (Kenya)
  lv: LOCALE_KEY.LvLv, // Latvian latviešu
  lv_LV: LOCALE_KEY.LvLv, // Latvian (Latvia) latviešu (Latvija)
  // 'mas', // Masai Maa
  // 'mas_KE', // Masai (Kenya) Maa (Kenya)
  // 'mas_TZ', // Masai (Tanzania) Maa (Tansania)
  // 'mer', // Meru Kĩmĩrũ
  // 'mer_KE', // Meru (Kenya) Kĩmĩrũ (Kenya)
  // 'mfe', // Morisyen kreol morisien
  // 'mfe_MU', // Morisyen (Mauritius) kreol morisien (Moris)
  // 'mg', // Malagasy Malagasy
  // 'mg_MG', // Malagasy (Madagascar) Malagasy (Madagasikara)
  // 'mgh', // Makhuwa-Meetto Makua
  // 'mgh_MZ', // Makhuwa-Meetto (Mozambique) Makua (Umozambiki)
  // 'mgo', // Metaʼ metaʼ
  // 'mgo_CM', // Metaʼ (Cameroon) metaʼ (Kamalun)
  // 'mk', // Macedonian македонски TODO
  // 'mk_MK', // Macedonian (Macedonia) македонски (Македонија) TODO
  // 'ml', // Malayalam മലയാളം
  // 'ml_IN', // Malayalam (India) മലയാളം (ഇന്ത്യ)
  // 'mn', // Mongolian монгол TODO
  // 'mn_MN', // Mongolian (Mongolia) монгол (Монгол) TODO
  mr: LOCALE_KEY.MrIn, // Marathi मराठी
  mr_IN: LOCALE_KEY.MrIn, // Marathi (India) मराठी (भारत)
  ms: LOCALE_KEY.MsMy, // Malay Melayu
  ms_BN: LOCALE_KEY.MsMy, // Malay (Brunei) Melayu (Brunei)
  ms_MY: LOCALE_KEY.MsMy, // Malay (Malaysia) Melayu (Malaysia)
  ms_SG: LOCALE_KEY.MsMy, // Malay (Singapore) Melayu (Singapura)
  mt: LOCALE_KEY.MtMt, // Maltese Malti
  mt_MT: LOCALE_KEY.MtMt, // Maltese (Malta) Malti (Malta)
  // 'mua', // Mundang MUNDAŊ
  // 'mua_CM', // Mundang (Cameroon) MUNDAŊ (kameruŋ)
  // 'my', // Burmese မြန်မာ
  // 'my_MM', // Burmese (Myanmar [Burma]) မြန်မာ (မြန်မာ)
  // 'mzn', // Mazanderani مازرونی
  // 'mzn_IR', // Mazanderani (Iran) مازرونی (ایران)
  // 'naq', // Nama Khoekhoegowab
  // 'naq_NA', // Nama (Namibia) Khoekhoegowab (Namibiab)
  nb: LOCALE_KEY.NbNi, // Norwegian Bokmål norsk bokmål
  nb_NO: LOCALE_KEY.NbNi, // Norwegian Bokmål (Norway) norsk bokmål (Norge)
  nb_SJ: LOCALE_KEY.NbNi, // Norwegian Bokmål (Svalbard & Jan Mayen) norsk bokmål (Svalbard og Jan Mayen)
  // 'nd', // North Ndebele isiNdebele
  // 'nd_ZW', // North Ndebele (Zimbabwe) isiNdebele (Zimbabwe)
  // 'nds', // Low German nds TODO?
  // 'nds_DE', // Low German (Germany) nds (DE) TODO?
  // 'nds_NL', // Low German (Netherlands) nds (NL) Low Saxon TODO?
  // 'ne', // Nepali नेपाली
  // 'ne_IN', // Nepali (India) नेपाली (भारत)
  // 'ne_NP', // Nepali (Nepal) नेपाली (नेपाल)
  nl: LOCALE_KEY.NlNl, // Dutch Nederlands
  nl_AW: LOCALE_KEY.NlNl, // Dutch (Aruba) Nederlands (Aruba)
  nl_BE: LOCALE_KEY.NlBe, // Dutch (Belgium) Nederlands (België) Flemish
  nl_BQ: LOCALE_KEY.NlNl, // Dutch (Caribbean Netherlands) Nederlands (Caribisch Nederland)
  nl_CW: LOCALE_KEY.NlNl, // Dutch (Curaçao) Nederlands (Curaçao)
  nl_NL: LOCALE_KEY.NlNl, // Dutch (Netherlands) Nederlands (Nederland)
  nl_SR: LOCALE_KEY.NlNl, // Dutch (Suriname) Nederlands (Suriname)
  nl_SX: LOCALE_KEY.NlNl, // Dutch (Sint Maarten) Nederlands (Sint-Maarten)
  // 'nmg', // Kwasio nmg
  // 'nmg_CM', // Kwasio (Cameroon) nmg (Kamerun)
  // 'nn', // Norwegian Nynorsk nynorsk
  // 'nn_NO', // Norwegian Nynorsk (Norway) nynorsk (Noreg)
  // 'nnh', // Ngiemboon Shwóŋò ngiembɔɔn
  // 'nnh_CM', // Ngiemboon (Cameroon) Shwóŋò ngiembɔɔn (Kàmalûm)
  // 'nus', // Nuer Thok Nath
  // 'nus_SS', // Nuer (South Sudan) Thok Nath (SS)
  // 'nyn', // Nyankole Runyankore
  // 'nyn_UG', // Nyankole (Uganda) Runyankore (Uganda)
  // 'om', // Oromo Oromoo
  // 'om_ET', // Oromo (Ethiopia) Oromoo (Itoophiyaa)
  // 'om_KE', // Oromo (Kenya) Oromoo (Keeniyaa)
  // 'or', // Odia ଓଡ଼ିଆ
  // 'or_IN', // Odia (India) ଓଡ଼ିଆ (ଭାରତ)
  // 'os', // Ossetic ирон
  // 'os_GE', // Ossetic (Georgia) ирон (Гуырдзыстон)
  // 'os_RU', // Ossetic (Russia) ирон (Уӕрӕсе)
  // 'pa', // Punjabi ਪੰਜਾਬੀ TODO
  // 'pa_Arab', // Punjabi (Arabic) پنجابی (عربی) TODO
  // 'pa_Arab_PK', // Punjabi (Arabic, Pakistan) پنجابی (عربی, پاکستان) TODO
  // 'pa_Guru', // Punjabi (Gurmukhi) ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ) TODO
  // 'pa_Guru_IN', // Punjabi (Gurmukhi, India) ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ, ਭਾਰਤ) TODO
  pl: LOCALE_KEY.PlPl, // Polish polski
  pl_PL: LOCALE_KEY.PlPl, // Polish (Poland) polski (Polska)
  // 'ps', // Pashto پښتو TODO
  // 'ps_AF', // Pashto (Afghanistan) پښتو (افغانستان) TODO
  pt: LOCALE_KEY.PtPt, // Portuguese português
  pt_AO: LOCALE_KEY.PtPt, // Portuguese (Angola) português (Angola)
  pt_BR: LOCALE_KEY.PtBr, // Portuguese (Brazil) português (Brasil) Brazilian Portuguese
  pt_CH: LOCALE_KEY.PtPt, // Portuguese (Switzerland) português (Suíça)
  pt_CV: LOCALE_KEY.PtPt, // Portuguese (Cape Verde) português (Cabo Verde)
  pt_GQ: LOCALE_KEY.PtPt, // Portuguese (Equatorial Guinea) português (Guiné Equatorial)
  pt_GW: LOCALE_KEY.PtPt, // Portuguese (Guinea-Bissau) português (Guiné-Bissau)
  pt_LU: LOCALE_KEY.PtPt, // Portuguese (Luxembourg) português (Luxemburgo)
  pt_MO: LOCALE_KEY.PtPt, // Portuguese (Macau SAR China) português (Macau, RAE da China)
  pt_MZ: LOCALE_KEY.PtPt, // Portuguese (Mozambique) português (Moçambique)
  pt_PT: LOCALE_KEY.PtPt, // Portuguese (Portugal) português (Portugal) European Portuguese
  pt_ST: LOCALE_KEY.PtPt, // Portuguese (São Tomé & Príncipe) português (São Tomé e Príncipe)
  pt_TL: LOCALE_KEY.PtPt, // Portuguese (Timor-Leste) português (Timor-Leste)
  // 'qu', // Quechua Runasimi
  // 'qu_BO', // Quechua (Bolivia) Runasimi (Bolivia)
  // 'qu_EC', // Quechua (Ecuador) Runasimi (Ecuador)
  // 'qu_PE', // Quechua (Peru) Runasimi (Perú)
  // 'rm', // Romansh rumantsch
  // 'rm_CH', // Romansh (Switzerland) rumantsch (Svizra)
  // 'rn', // Rundi Ikirundi
  // 'rn_BI', // Rundi (Burundi) Ikirundi (Uburundi)
  ro: LOCALE_KEY.RoRo, // Romanian română
  ro_MD: LOCALE_KEY.RoRo, // Romanian (Moldova) română (Republica Moldova) Moldavian
  ro_RO: LOCALE_KEY.RoRo, // Romanian (Romania) română (România)
  // 'rof', // Rombo Kihorombo
  // 'rof_TZ', // Rombo (Tanzania) Kihorombo (Tanzania)
  ru: LOCALE_KEY.Ru, // Russian русский
  ru_BY: LOCALE_KEY.Ru, // Russian (Belarus) русский (Беларусь)
  ru_KG: LOCALE_KEY.Ru, // Russian (Kyrgyzstan) русский (Киргизия)
  ru_KZ: LOCALE_KEY.Ru, // Russian (Kazakhstan) русский (Казахстан)
  ru_MD: LOCALE_KEY.Ru, // Russian (Moldova) русский (Молдова)
  ru_RU: LOCALE_KEY.RuRu, // Russian (Russia) русский (Россия)
  ru_UA: LOCALE_KEY.Ru, // Russian (Ukraine) русский (Украина)
  // 'rw', // Kinyarwanda Kinyarwanda
  // 'rw_RW', // Kinyarwanda (Rwanda) Kinyarwanda (U Rwanda)
  // 'rwk', // Rwa Kiruwa
  // 'rwk_TZ', // Rwa (Tanzania) Kiruwa (Tanzania)
  // 'sah', // Sakha саха тыла
  // 'sah_RU', // Sakha (Russia) саха тыла (Арассыыйа)
  // 'saq', // Samburu Kisampur
  // 'saq_KE', // Samburu (Kenya) Kisampur (Kenya)
  // 'sbp', // Sangu Ishisangu
  // 'sbp_TZ', // Sangu (Tanzania) Ishisangu (Tansaniya)
  // 'se', // Northern Sami davvisámegiella
  // 'se_FI', // Northern Sami (Finland) davvisámegiella (Suopma)
  // 'se_NO', // Northern Sami (Norway) davvisámegiella (Norga)
  // 'se_SE', // Northern Sami (Sweden) davvisámegiella (Ruoŧŧa)
  // 'seh', // Sena sena
  // 'seh_MZ', // Sena (Mozambique) sena (Moçambique)
  // 'ses', // Koyraboro Senni Koyraboro senni
  // 'ses_ML', // Koyraboro Senni (Mali) Koyraboro senni (Maali)
  // 'sg', // Sango Sängö
  // 'sg_CF', // Sango (Central African Republic) Sängö (Ködörösêse tî Bêafrîka)
  // 'shi', // Tachelhit ⵜⴰⵛⵍⵃⵉⵜ
  // 'shi_Latn', // Tachelhit (Latin) Tashelḥiyt (Latn)
  // 'shi_Latn_MA', // Tachelhit (Latin, Morocco) Tashelḥiyt (Latn, lmɣrib)
  // 'shi_Tfng', // Tachelhit (Tifinagh) ⵜⴰⵛⵍⵃⵉⵜ (Tfng)
  // 'shi_Tfng_MA', // Tachelhit (Tifinagh, Morocco) ⵜⴰⵛⵍⵃⵉⵜ (Tfng, ⵍⵎⵖⵔⵉⴱ)
  // 'si', // Sinhala සිංහල
  // 'si_LK', // Sinhala (Sri Lanka) සිංහල (ශ්‍රී ලංකාව)
  sk: LOCALE_KEY.SkSk, // Slovak slovenčina
  sk_SK: LOCALE_KEY.SkSk, // Slovak (Slovakia) slovenčina (Slovensko)
  sl: LOCALE_KEY.SlSl, // Slovenian slovenščina
  sl_SI: LOCALE_KEY.SlSl, // Slovenian (Slovenia) slovenščina (Slovenija)
  // 'smn', // Inari Sami anarâškielâ
  // 'smn_FI', // Inari Sami (Finland) anarâškielâ (Suomâ)
  // 'sn', // Shona chiShona
  // 'sn_ZW', // Shona (Zimbabwe) chiShona (Zimbabwe)
  // 'so', // Somali Soomaali TODO
  // 'so_DJ', // Somali (Djibouti) Soomaali (Jabuuti) TODO
  // 'so_ET', // Somali (Ethiopia) Soomaali (Itoobiya) TODO
  // 'so_KE', // Somali (Kenya) Soomaali (Kiiniya) TODO
  // 'so_SO', // Somali (Somalia) Soomaali (Soomaaliya) TODO
  // 'sq', // Albanian shqip TODO
  // 'sq_AL', // Albanian (Albania) shqip (Shqipëri) TODO
  // 'sq_MK', // Albanian (Macedonia) shqip (Maqedoni) TODO
  // 'sq_XK', // Albanian (Kosovo) shqip (Kosovë) TODO
  sr: LOCALE_KEY.SrLatnRs, // Serbian српски
  // 'sr_Cyrl', // Serbian (Cyrillic) српски (ћирилица) TODO (latin or cyrillic?)
  // 'sr_Cyrl_BA', // Serbian (Cyrillic, Bosnia & Herzegovina) српски (ћирилица, Босна и Херцеговина) TODO (latin or cyrillic?)
  // 'sr_Cyrl_ME', // Serbian (Cyrillic, Montenegro) српски (ћирилица, Црна Гора) TODO (latin or cyrillic?)
  // 'sr_Cyrl_RS', // Serbian (Cyrillic, Serbia) српски (ћирилица, Србија) TODO (latin or cyrillic?)
  // 'sr_Cyrl_XK', // Serbian (Cyrillic, Kosovo) српски (ћирилица, Косово) TODO (latin or cyrillic?)
  sr_Latn: LOCALE_KEY.SrLatnRs, // Serbian (Latin) srpski (latinica)
  sr_Latn_BA: LOCALE_KEY.SrLatnRs, // Serbian (Latin, Bosnia & Herzegovina) srpski (latinica, Bosna i Hercegovina)
  sr_Latn_ME: LOCALE_KEY.SrLatnRs, // Serbian (Latin, Montenegro) srpski (latinica, Crna Gora)
  sr_Latn_RS: LOCALE_KEY.SrLatnRs, // Serbian (Latin, Serbia) srpski (latinica, Srbija)
  sr_Latn_XK: LOCALE_KEY.SrLatnRs, // Serbian (Latin, Kosovo) srpski (latinica, Kosovo)
  sv: LOCALE_KEY.SvSe, // Swedish svenska
  sv_AX: LOCALE_KEY.SvSe, // Swedish (Åland Islands) svenska (Åland)
  sv_FI: LOCALE_KEY.SvSe, // Swedish (Finland) svenska (Finland)
  sv_SE: LOCALE_KEY.SvSe, // Swedish (Sweden) svenska (Sverige)
  // 'sw', // Swahili Kiswahili TODO
  // 'sw_CD', // Swahili (Congo - Kinshasa) Kiswahili (Jamhuri ya Kidemokrasia ya Kongo) Congo Swahili TODO
  // 'sw_KE', // Swahili (Kenya) Kiswahili (Kenya) TODO
  // 'sw_TZ', // Swahili (Tanzania) Kiswahili (Tanzania) TODO
  // 'sw_UG', // Swahili (Uganda) Kiswahili (Uganda) TODO
  ta: LOCALE_KEY.TaIn, // Tamil தமிழ்
  ta_IN: LOCALE_KEY.TaIn, // Tamil (India) தமிழ் (இந்தியா)
  ta_LK: LOCALE_KEY.TaIn, // Tamil (Sri Lanka) தமிழ் (இலங்கை)
  ta_MY: LOCALE_KEY.TaIn, // Tamil (Malaysia) தமிழ் (மலேசியா)
  ta_SG: LOCALE_KEY.TaIn, // Tamil (Singapore) தமிழ் (சிங்கப்பூர்)
  // 'te', // Telugu తెలుగు TODO
  // 'te_IN', // Telugu (India) తెలుగు (భారతదేశం) TODO
  // 'teo', // Teso Kiteso
  // 'teo_KE', // Teso (Kenya) Kiteso (Kenia)
  // 'teo_UG', // Teso (Uganda) Kiteso (Uganda)
  // 'tg', // Tajik тоҷикӣ
  // 'tg_TJ', // Tajik (Tajikistan) тоҷикӣ (Тоҷикистон)
  th: LOCALE_KEY.ThTh, // Thai ไทย
  th_TH: LOCALE_KEY.ThTh, // Thai (Thailand) ไทย (ไทย)
  // 'ti', // Tigrinya ትግርኛ
  // 'ti_ER', // Tigrinya (Eritrea) ትግርኛ (ኤርትራ)
  // 'ti_ET', // Tigrinya (Ethiopia) ትግርኛ (ኢትዮጵያ)
  // 'to', // Tongan lea fakatonga
  // 'to_TO', // Tongan (Tonga) lea fakatonga (Tonga)
  tr: LOCALE_KEY.TrTr, // Turkish Türkçe
  tr_CY: LOCALE_KEY.TrTr, // Turkish (Cyprus) Türkçe (Kıbrıs)
  tr_TR: LOCALE_KEY.TrTr, // Turkish (Turkey) Türkçe (Türkiye)
  // 'tt', // Tatar татар
  // 'tt_RU', // Tatar (Russia) татар (Россия)
  // 'twq', // Tasawaq Tasawaq senni
  // 'twq_NE', // Tasawaq (Niger) Tasawaq senni (Nižer)
  // 'tzm', // Central Atlas Tamazight Tamaziɣt n laṭlaṣ
  // 'tzm_MA', // Central Atlas Tamazight (Morocco) Tamaziɣt n laṭlaṣ (Meṛṛuk)
  // 'ug', // Uyghur ئۇيغۇرچە
  // 'ug_CN', // Uyghur (China) ئۇيغۇرچە (جۇڭگو)
  uk: LOCALE_KEY.UkUa, // Ukrainian українська
  uk_UA: LOCALE_KEY.UkUa, // Ukrainian (Ukraine) українська (Україна)
  // 'ur', // Urdu اردو TODO
  // 'ur_IN', // Urdu (India) اردو (بھارت) TODO
  // 'ur_PK', // Urdu (Pakistan) اردو (پاکستان) TODO
  // 'uz', // Uzbek o‘zbek TODO
  // 'uz_Arab', // Uzbek (Arabic) اوزبیک (عربی) TODO
  // 'uz_Arab_AF', // Uzbek (Arabic, Afghanistan) اوزبیک (عربی, افغانستان) TODO
  // 'uz_Cyrl', // Uzbek (Cyrillic) ўзбекча (Кирил) TODO
  // 'uz_Cyrl_UZ', // Uzbek (Cyrillic, Uzbekistan) ўзбекча (Кирил, Ўзбекистон) TODO
  // 'uz_Latn', // Uzbek (Latin) o‘zbek (lotin) TODO
  // 'uz_Latn_UZ', // Uzbek (Latin, Uzbekistan) o‘zbek (lotin, Oʻzbekiston) TODO
  // 'vai', // Vai ꕙꔤ
  // 'vai_Latn', // Vai (Latin) Vai (Latn)
  // 'vai_Latn_LR', // Vai (Latin, Liberia) Vai (Latn, Laibhiya)
  // 'vai_Vaii', // Vai (Vai) ꕙꔤ (Vaii)
  // 'vai_Vaii_LR', // Vai (Vai, Liberia) ꕙꔤ (Vaii, ꕞꔤꔫꕩ)
  vi: LOCALE_KEY.ViVn, // Vietnamese Tiếng Việt
  vi_VN: LOCALE_KEY.ViVn, // Vietnamese (Vietnam) Tiếng Việt (Việt Nam)
  // 'vun', // Vunjo Kyivunjo
  // 'vun_TZ', // Vunjo (Tanzania) Kyivunjo (Tanzania)
  // 'wae', // Walser Walser
  // 'wae_CH', // Walser (Switzerland) Walser (Schwiz)
  // 'wo', // Wolof Wolof
  // 'wo_SN', // Wolof (Senegal) Wolof (Senegaal)
  // 'xog', // Soga Olusoga
  // 'xog_UG', // Soga (Uganda) Olusoga (Yuganda)
  // 'yav', // Yangben nuasue
  // 'yav_CM', // Yangben (Cameroon) nuasue (Kemelún)
  // 'yi', // Yiddish ייִדיש
  // 'yi_001', // Yiddish (World) ייִדיש (וועלט)
  // 'yo', // Yoruba Èdè Yorùbá
  // 'yo_BJ', // Yoruba (Benin) Èdè Yorùbá (Orílɛ́ède Bɛ̀nɛ̀)
  // 'yo_NG', // Yoruba (Nigeria) Èdè Yorùbá (Orílẹ́ède Nàìjíríà)
  yue: LOCALE_KEY.ZhHk, // Cantonese 粵語
  yue_Hans: LOCALE_KEY.ZhCn, // Cantonese (Simplified) 粤语 (简体)
  yue_Hans_CN: LOCALE_KEY.ZhCn, // Cantonese (Simplified, China) 粤语 (简体，中华人民共和国)
  yue_Hant: LOCALE_KEY.ZhHk, // Cantonese (Traditional) 粵語 (繁體)
  yue_Hant_HK: LOCALE_KEY.ZhHk, // Cantonese (Traditional, Hong Kong SAR China) 粵語 (繁體，中華人民共和國香港特別行政區)
  // 'zgh', // Standard Moroccan Tamazight ⵜⴰⵎⴰⵣⵉⵖⵜ
  // 'zgh_MA', // Standard Moroccan Tamazight (Morocco) ⵜⴰⵎⴰⵣⵉⵖⵜ (ⵍⵎⵖⵔⵉⴱ)
  zh: LOCALE_KEY.ZhCn, // Chinese 中文
  zh_Hans: LOCALE_KEY.ZhCn, // Chinese (Simplified) 中文（简体） Simplified Chinese
  zh_Hans_CN: LOCALE_KEY.ZhCn, // Chinese (Simplified, China) 中文（简体，中国） Simplified Chinese (China)
  zh_Hans_HK: LOCALE_KEY.ZhCn, // Chinese (Simplified, Hong Kong SAR China) 中文（简体，中国香港特别行政区） Simplified Chinese (Hong Kong SAR China)
  zh_Hans_MO: LOCALE_KEY.ZhCn, // Chinese (Simplified, Macau SAR China) 中文（简体，中国澳门特别行政区） Simplified Chinese (Macau SAR China)
  zh_Hans_SG: LOCALE_KEY.ZhCn, // Chinese (Simplified, Singapore) 中文（简体，新加坡） Simplified Chinese (Singapore)
  zh_Hant: LOCALE_KEY.ZhHk, // Chinese (Traditional) 中文（繁體） Traditional Chinese
  zh_Hant_HK: LOCALE_KEY.ZhHk, // Chinese (Traditional, Hong Kong SAR China) 中文（繁體字，中國香港特別行政區） Traditional Chinese (Hong Kong SAR China)
  zh_Hant_MO: LOCALE_KEY.ZhHk, // Chinese (Traditional, Macau SAR China) 中文（繁體字，中國澳門特別行政區） Traditional Chinese (Macau SAR China)
  zh_Hant_TW: LOCALE_KEY.ZhHk, // Chinese (Traditional, Taiwan) 中文（繁體，台灣） Traditional Chinese (Taiwan)
  zu: LOCALE_KEY.ZuZa, // Zulu isiZulu
  zu_ZA: LOCALE_KEY.ZuZa, // Zulu (South Africa) isiZulu (iNingizimu Afrika)
} as const;
/* eslint-enable max-lines */
