// type-utils
import { applyEnum } from '@transcend-io/type-utils';

// local
import { LanguageKey } from './enums';
import type {
  TranslatedMessage,
  TranslatedMessageInput,
  Translations,
} from './types';

/**
 * Get all translations for a specific message
 *
 * @param msg - The message input
 * @param translations - All translations
 * @returns The message with all locales defined
 */
export function getMessageTranslationsInput(
  { id, ...msg }: TranslatedMessage,
  translations: Translations,
): Required<TranslatedMessageInput> {
  return {
    ...msg,
    ...applyEnum(LanguageKey, (locale) => translations[locale][id]),
  };
}
