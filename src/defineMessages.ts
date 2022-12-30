// local
import { DefinedMessage } from './types';

/**
 * Defined messages
 */
export type DefinedMessages<TNames extends string = string> = {
  [key in TNames]: DefinedMessage;
};

/**
 * Define intl messages for a container with a namespace applied to each message key to create a unique id.
 *
 * Can also specify and enum if the messages must have a definition for each enum type
 *
 * ```ts
 *  enum RequestAction {
 *    Access = 'ACCESS',
 *    Erasure = 'ERASURE',
 *  }
 *  const messages = defineMessages<RequestAction>('my-unique-namespace', {
 *     ACCESS: {
 *       defaultMessages: 'Access Request!'
 *     },
 *     ERASURE: {
 *      defaultMessages: 'Erasure Request!'
 *    },
 *  })
 *
 * ```
 *
 * @param namespace - The namespace to use for ids
 * @param messages - The message definitions
 * @returns The intl message definition creator
 */
export function defineMessages<TNames extends string>(
  namespace: string,
  messages: {
    [key in TNames]: Omit<DefinedMessage, 'id'>;
  },
): DefinedMessages<TNames> {
  return Object.keys(messages).reduce(
    (acc, key) =>
      Object.assign(acc, {
        [key]: {
          ...messages[key as TNames],
          id: `${namespace}.${key}`,
        },
      }),
    {} as DefinedMessages<TNames>,
  );
}
