const assert = require('assert');
const app = require('../../src/app');

describe('\'loginHistories\' service', () => {
  it('registered the service', () => {
    const service = app.service('login-histories');

    assert.ok(service, 'Registered the service');
  });
});
