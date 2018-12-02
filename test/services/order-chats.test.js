const assert = require('assert');
const app = require('../../src/app');

describe('\'orderChats\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-chats');

    assert.ok(service, 'Registered the service');
  });
});
