import {ServerConfigurationInMemory} from '../infrastructure/server-configuration-in-memory';

describe(`The usecase get server`, () => {
  const serverInMemory = new ServerConfigurationInMemory();

  it(`should return a server configuration with :`, () => {
    const serverConfiguration = serverInMemory.retrieve();

    serverConfiguration.subscribe(sc =>
      expect(sc).toEqual({
        firstStart: false,
        location: {
          status: 'autoDetected',
          latitude: 43.5312,
          longitude: 5.4554,
          altitude: 0.0,
          timezone: 'Europe/Paris',
        },
        BasicAuthentication: {
          active: false,
          user: 'admin',
          password: ''
        }
      }))
  });
});
