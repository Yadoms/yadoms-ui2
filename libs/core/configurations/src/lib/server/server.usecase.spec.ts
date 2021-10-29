describe(`The usecase get server`, () => {
  it(`should return a server configuration with :`, () => {
    const actual = {
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
    };
    expect(actual).toEqual({
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
    })
  });
});
