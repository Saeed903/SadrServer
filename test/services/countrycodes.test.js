const assert = require('assert');
const app = require('../../src/app');

describe('\'countrycodes\' service', () => {
  it('registered the service', () => {
    const service = app.service('countrycodes');

    assert.ok(service, 'Registered the service');
  });
});
