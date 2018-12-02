const assert = require('assert');
const app = require('../../src/app');

describe('\'orderStates\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-states');

    assert.ok(service, 'Registered the service');
  });
});
