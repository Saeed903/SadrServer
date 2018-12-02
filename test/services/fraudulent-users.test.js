const assert = require('assert');
const app = require('../../src/app');

describe('\'fraudulentUsers\' service', () => {
  it('registered the service', () => {
    const service = app.service('fraudulent-users');

    assert.ok(service, 'Registered the service');
  });
});
