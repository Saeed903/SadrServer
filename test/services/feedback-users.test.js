const assert = require('assert');
const app = require('../../src/app');

describe('\'feedbackUsers\' service', () => {
  it('registered the service', () => {
    const service = app.service('feedback-users');

    assert.ok(service, 'Registered the service');
  });
});
