const app = require('../../src/app');

describe('\'templates\' service', () => {
  it('registered the service', () => {
    const service = app.service('users/templates');
    expect(service).toBeTruthy();
  });
});
