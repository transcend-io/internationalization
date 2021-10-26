// type-utils
import { apply } from '@transcend-io/type-utils';

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
  // Create the messages
  return apply(messages, (value, key) => ({
    ...value,
    id: `${namespace}.${key}`,
  }));
}
