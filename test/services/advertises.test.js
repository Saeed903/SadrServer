const assert = require('assert');
const app = require('../../src/app');

describe('\'Advertises\' service', () => {
  it('registered the service', () => {
    const service = app.service('advertises');

    assert.ok(service, 'Registered the service');
  });
});
