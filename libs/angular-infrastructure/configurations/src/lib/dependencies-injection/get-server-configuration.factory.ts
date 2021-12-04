import {InjectionToken} from '@angular/core';
import {GetServerConfigurationUsecase, ServerConfigurationRest} from '@yadoms/core/configurations';
import {ConfigurationEnvironment} from '../configurations.module';

export const GET_SERVER_CONFIGURATION = new InjectionToken<GetServerConfigurationUsecase>('GET_SERVER_CONFIGURATION');

export class GetServerConfigurationFactory {
  static buildGetServerConfiguration(environnement: ConfigurationEnvironment) {
    return this.restConfiguration(environnement.getServerConfigurationPath);
  }

  private static restConfiguration(serverConfigurationPath: string) {
    return new GetServerConfigurationUsecase(new ServerConfigurationRest(serverConfigurationPath))
  }
}
