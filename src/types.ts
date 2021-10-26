// local
import type { LanguageKey } from './enums';

/**
 * Translations map from message id to translation
 */
export type TranslatedMessages = { [id in string]: string };

/**
 * Message translations by language key
 */
export type Translations = { [key in LanguageKey]: TranslatedMessages };

/**
 * Message translations plus an additional description file
 */
export type TranslationsWithDescriptions = {
  [key in LanguageKey | 'description']: TranslatedMessages;
};

/**
 * react-intl interface is a bit looser
 */
export interface ReactIntlMessageDescriptor {
  /** ID */
  id?: string | number;
  /** Description */
  description?: string | object;
  /** Default message */
  defaultMessage?: string;
}

/**
 * Values to pass to a formatted message
 */
export type MessageValues = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

/**
 * A message definition (taken from react-intl but stripped down in complexity)
 */
export interface DefinedMessage {
  /** ID of message */
  id: string;
  /** Default value of the message */
  defaultMessage: string;
  /** Message description */
  description?: string;
}
