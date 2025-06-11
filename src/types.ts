// local
import type { LocaleValue } from './enums';

/**
 * Translations map from message id to translation string
 */
export type TranslatedMessages = { [id in string]: string };

/**
 * Mapping of Transcend locale key to a message object
 */
export type Translations = { [key in LocaleValue]: TranslatedMessages };

/**
 * Mapping of Transcend locale key (or description) to a message object
 */
export type TranslationsWithDescriptions = {
  [key in LocaleValue | 'description']: TranslatedMessages;
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
