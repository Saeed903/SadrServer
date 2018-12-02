const assert = require('assert');
const app = require('../../src/app');

describe('\'dayOfWeeks\' service', () => {
  it('registered the service', () => {
    const service = app.service('day-of-weeks');

    assert.ok(service, 'Registered the service');
  });
});
