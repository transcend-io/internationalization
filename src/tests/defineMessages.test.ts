// external
import { expect } from 'chai';

// global
import { defineMessages } from '../index';

describe('defineMessages', () => {
  it('ensure defineMessages returns identity', () => {
    expect(
      defineMessages('test-id', {
        dog: {
          defaultMessage: 'Test',
        },
      }),
    ).to.deep.equal({
      dog: {
        id: 'test-id.dog',
        defaultMessage: 'Test',
      },
    });
  });
});
