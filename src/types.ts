// local
import type { LanguageKey } from './enums';

/**
 * This is a type that is used to define a seeded international message.
 * We include a required default message, some optional translations
 * and no ID. The no ID is important as this data is copied into the database
 * where a globally unique ID is assigned at runtime.
 */
export type TranslatedMessageInput = { [k in LanguageKey]?: string } & {
  /** Default message */
  defaultMessage: string;
};

/**
 * This is the shape of the message stored in the db. We store the message
 * with a globally unique ID, a default messages, and all of the optional translations
 * as key value pairs in the object.
 */
export interface TranslatedMessage extends TranslatedMessageInput {
  /** ID is string */
  id: string;
}

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
 * Interface for localizing a message
 */
export type GetLocalizedMessage = (
  message: TranslatedMessage,
  locale: LanguageKey,
) => string;

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
