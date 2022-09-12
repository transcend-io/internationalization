import { makeEnum } from '@transcend-io/type-utils';

/**
 * The language identifier keys
 *
 * @see https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes
 */
export enum LanguageKey {
  // TODO: https://transcend.height.app/T-5873 - migrate these
  /** English */
  En = 'en',
  /** Arabic */
  Ar = 'ar',
  /** French */
  Fr = 'fr',
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
  /** Spanish (Castilian) */
  EsEs = 'es-ES',
  /** Spanish (Latin America & Caribbean) */
  Es419 = 'es-419',
  /** Chinese (Traditional) */
  ZhHk = 'zh-HK',
  /** Hebrew (Israel) */
  HeIl = 'he-IL',
  /** English (New Zealand) */
  EnNz = 'en-NZ',
}

export const ConsentManagerLanguageKey = makeEnum({
  // TODO: https://transcend.height.app/T-5873 - migrate these
  En: LanguageKey.En,
  Ar: LanguageKey.Ar,
  Fr: LanguageKey.Fr,
  De: LanguageKey.De,
  It: LanguageKey.It,
  Ja: LanguageKey.Ja,
  Ru: LanguageKey.Ru,

  DeAt: LanguageKey.DeAt,
  DeCh: LanguageKey.DeCh,
  ItCh: LanguageKey.ItCh,
  FrCh: LanguageKey.FrCh,
  NlBe: LanguageKey.NlBe,
  HeIl: LanguageKey.HeIl,
  EnNz: LanguageKey.EnNz,
  ArAe: LanguageKey.ArAe,
  FrFr: LanguageKey.FrFr,
  DeDe: LanguageKey.DeDe,
  ItIt: LanguageKey.ItIt,
  AfZz: LanguageKey.AfZz,
  BgBg: LanguageKey.BgBg,
  ZhCn: LanguageKey.ZhCn,
  HrHr: LanguageKey.HrHr,
  CsCz: LanguageKey.CsCz,
  DaDk: LanguageKey.DaDk,
  EnGb: LanguageKey.EnGb,
  EnCa: LanguageKey.EnCa,
  EnAe: LanguageKey.EnAe,
  FiFi: LanguageKey.FiFi,
  ElGr: LanguageKey.ElGr,
  HiIn: LanguageKey.HiIn,
  HuHu: LanguageKey.HuHu,
  IdId: LanguageKey.IdId,
  JaJp: LanguageKey.JaJp,
  KoKr: LanguageKey.KoKr,
  LtLt: LanguageKey.LtLt,
  MsMy: LanguageKey.MsMy,
  NbNi: LanguageKey.NbNi,
  PlPl: LanguageKey.PlPl,
  PtBr: LanguageKey.PtBr,
  PtPt: LanguageKey.PtPt,
  RoRo: LanguageKey.RoRo,
  SrLatnRs: LanguageKey.SrLatnRs,
  SvSe: LanguageKey.SvSe,
  TaIn: LanguageKey.TaIn,
  ThTh: LanguageKey.ThTh,
  TrTr: LanguageKey.TrTr,
  UkUa: LanguageKey.UkUa,
  ViVn: LanguageKey.ViVn,
  EnUS: LanguageKey.EnUS,
  EnAu: LanguageKey.EnAu,
  FrBe: LanguageKey.FrBe,
  FrCa: LanguageKey.FrCa,
  EnIe: LanguageKey.EnIe,
  NlNl: LanguageKey.NlNl,
  EsEs: LanguageKey.EsEs,
  Es419: LanguageKey.Es419,
  ZhHk: LanguageKey.ZhHk,
});

/**
 * Override type
 */
export type ConsentManagerLanguageKey =
  typeof ConsentManagerLanguageKey[keyof typeof ConsentManagerLanguageKey];
