import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  GET_SERVER_CONFIGURATION,
  GetServerConfigurationFactory
} from './dependencies-injection/get-server-configuration-factory';
import { ServerConfigurationComponent } from './server-configuration/server-configuration.component';

export interface ConfigurationEnvironment {
  getServerRootPath: string;
}

@NgModule({
  imports: [CommonModule],
  declarations: [
    ServerConfigurationComponent
  ],
  exports: [ServerConfigurationComponent]
})
export class ConfigurationModule {
  static forRoot(environment: ConfigurationEnvironment): ModuleWithProviders<ConfigurationModule> {
    return {
      ngModule: ConfigurationModule,
      providers:
        [
          {
            provide: GET_SERVER_CONFIGURATION,
            useFactory: () => GetServerConfigurationFactory.buildGetServerConfiguration(environment)
          },
        ]
    }
  }
}
