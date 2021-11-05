import {InjectionToken} from '@angular/core';
import {GetServerConfigurationUsecase, ServerConfigurationRest} from '@yadoms-ui2/core/configurations';
import {ConfigurationEnvironment} from '../configuration.module';

export const GET_SERVER_CONFIGURATION = new InjectionToken<GetServerConfigurationUsecase>('GET_SERVER_CONFIGURATION');

export class GetServerConfigurationFactory {
  static buildGetServerConfiguration(environnement: ConfigurationEnvironment) {
    return this.restConfiguration(environnement.getServerRootPath);
  }

  private static restConfiguration(serverRootPath: string) {
    return new GetServerConfigurationUsecase(new ServerConfigurationRest(serverRootPath))
  }
}
