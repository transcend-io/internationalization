// type-utils
import { createEnum } from '@transcend-io/type-utils';

// local
import { LanguageKey } from './enums';

// The valid actions indexed by type
const VALID_LOCALES = createEnum(Object.values(LanguageKey));

/**
 * Test if a string is a locale that we support
 *
 * @param locale - The locale to test
 * @returns True if a valid locale
 */
export function isKnownLocale(
  locale: string | string[] | boolean | undefined,
): locale is LanguageKey {
  return !!locale && typeof locale === 'string' && locale in VALID_LOCALES;
}
