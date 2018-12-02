const assert = require('assert');
const app = require('../../src/app');

describe('\'users_permissions\' service', () => {
  it('registered the service', () => {
    const service = app.service('users-permissions');

    assert.ok(service, 'Registered the service');
  });
});
