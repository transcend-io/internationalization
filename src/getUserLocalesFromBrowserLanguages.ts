import { LocaleValue, LOCALE_BROWSER_MAP_LOWERCASE } from './enums';

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
): string[] {
  const tags = (languages?.length ? languages : [language]) as string[];
  return tags.map((t) => t.trim()).filter((x) => !!x);
}

/**
 * Case-insensitive lookup of a browser tag in LOCALE_BROWSER_MAP,
 * with a fallback to its base tag.
 *
 * @param tag - Browser tag (any case, e.g., 'Es-Mx')
 * @returns LocaleValue if found, otherwise undefined
 */
export function mapBrowserTagToLocale(tag: string): LocaleValue | undefined {
  // normalize language
  const lc = normalizeBrowserTag(tag);

  // direct match if exists
  if (lc in LOCALE_BROWSER_MAP_LOWERCASE) {
    return LOCALE_BROWSER_MAP_LOWERCASE[lc];
  }

  // otherwise try base prefix
  const baseLc = baseOf(lc);
  if (baseLc in LOCALE_BROWSER_MAP_LOWERCASE) {
    return LOCALE_BROWSER_MAP_LOWERCASE[baseLc];
  }

  // no direct match
  return undefined;
}

/**
 * Resolve the best supported LocaleValue for a single browser tag.
 * Rule:
 *  1) Map via LOCALE_BROWSER_MAP (case-insensitive); if supported, use it.
 *  2) Otherwise, use the browser tag’s base prefix:
 *     a) if the short code (e.g., 'ar') is supported, use it
 *     b) else pick the first 'ar-*' in supportedLocales (preserves customer order)
 *
 * @param browserTag - Browser tag (e.g., 'ar-EG')
 * @param supportedLocales - Allowed locales (customer-ordered)
 * @returns Supported LocaleValue or undefined if no base match exists
 */
export function resolveSupportedLocaleForBrowserTag(
  browserTag: string,
  supportedLocales: LocaleValue[],
): LocaleValue | undefined {
  const supportedSet = new Set(supportedLocales);

  // look for direct match and accept that if in list
  const mapped = mapBrowserTagToLocale(browserTag);
  if (mapped && supportedSet.has(mapped)) {
    return mapped;
  }

  // if no direct match, look for base prefix matches e.g. "ar-EG" -> "ar"
  const prefixLc = baseOf(normalizeBrowserTag(browserTag));
  const shortMatch = supportedLocales.find((l) => l.toLowerCase() === prefixLc);
  if (shortMatch) {
    return shortMatch;
  }

  // then first variant with same base
  const variantMatch = supportedLocales.find(
    (l) => l.includes('-') && baseOf(l).toLowerCase() === prefixLc,
  );
  return variantMatch;
}

/**
 * Map an ordered list of browser tags to supported LocaleValues using the resolve rule.
 * Keeps first-seen order from the browser list and de-duplicates.
 * Falls back to default if nothing matches.
 *
 * @param browserLocales - Browser tags (ordered by user preference)
 * @param supportedLocales - Allowed locales (customer-ordered)
 * @param defaultLocale - Fallback when nothing matches (defaults to 'en')
 * @returns Ordered, unique supported LocaleValues
 */
export function getUserLocalesFromBrowserLanguages(
  browserLocales: string[],
  supportedLocales: LocaleValue[],
  defaultLocale: LocaleValue,
): LocaleValue[] {
  const resolved = browserLocales
    .map((tag) => resolveSupportedLocaleForBrowserTag(tag, supportedLocales))
    .filter((x): x is LocaleValue => Boolean(x));

  const unique = uniqOrdered(resolved);
  return unique.length ? unique : [defaultLocale];
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
