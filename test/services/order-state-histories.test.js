const assert = require('assert');
const app = require('../../src/app');

describe('\'orderStateHistories\' service', () => {
  it('registered the service', () => {
    const service = app.service('order-state-histories');

    assert.ok(service, 'Registered the service');
  });
});
