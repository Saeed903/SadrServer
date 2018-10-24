const assert = require('assert');
const app = require('../../src/app');

describe('\'Payment_Methods\' service', () => {
  it('registered the service', () => {
    const service = app.service('payment-methods');

    assert.ok(service, 'Registered the service');
  });
});
