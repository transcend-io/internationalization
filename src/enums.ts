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
  EnAe = 'en-AE',
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
  EnUS = 'en-US',
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
  typeof ConsentManagerLanguageKey[keyof typeof ConsentManagerLanguageKey];
