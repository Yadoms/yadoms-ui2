import {ServerConfigurationModel} from '../model/server-configuration.model';

export class ServerConfigurationFactory {
  static buildServerConfiguration(): ServerConfigurationModel {
    return {
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
    }
  }
}
