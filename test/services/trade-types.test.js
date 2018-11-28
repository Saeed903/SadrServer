const assert = require('assert');
const app = require('../../src/app');

describe('\'TradeTypes\' service', () => {
  it('registered the service', () => {
    const service = app.service('trade-types');

    assert.ok(service, 'Registered the service');
  });
});
