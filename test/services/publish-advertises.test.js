const assert = require('assert');
const app = require('../../src/app');

describe('\'publish-advertises\' service', () => {
  it('registered the service', () => {
    const service = app.service('publish-advertises');

    assert.ok(service, 'Registered the service');
  });
});
