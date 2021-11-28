export interface ServerConfigurationModel {
  firstStart: boolean,
  location: {
    status: string,
    latitude: number,
    longitude: number,
    altitude: number,
    timezone: string,
  },
  BasicAuthentication: {
    active: boolean,
    user: string,
    password: string
  }
}
