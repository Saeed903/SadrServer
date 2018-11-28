const assert = require('assert');
const app = require('../../src/app');

describe('\'cryptoCurrencies\' service', () => {
  it('registered the service', () => {
    const service = app.service('cryptoCurrencies');

    assert.ok(service, 'Registered the service');
  });
});
