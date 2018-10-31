const assert = require('assert');
const app = require('../../src/app');

describe('\'Trades\' service', () => {
  it('registered the service', () => {
    const service = app.service('trades');

    assert.ok(service, 'Registered the service');
  });
});
