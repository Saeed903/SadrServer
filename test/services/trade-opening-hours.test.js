const assert = require('assert');
const app = require('../../src/app');

describe('\'tradeOpeningHours\' service', () => {
  it('registered the service', () => {
    const service = app.service('trade-opening-hours');

    assert.ok(service, 'Registered the service');
  });
});
