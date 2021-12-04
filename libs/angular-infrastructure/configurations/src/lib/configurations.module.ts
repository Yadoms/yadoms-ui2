import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServerConfigurationsComponent} from './server-configurations/server-configurations.component';
import {
  GET_SERVER_CONFIGURATION,
  GetServerConfigurationFactory
} from './dependencies-injection/get-server-configuration.factory';

export interface ConfigurationEnvironment {
  rootPath: string,
  getServerConfiguration: string;
}

@NgModule({
  imports: [CommonModule],
  declarations: [
    ServerConfigurationsComponent
  ],
  exports: [
    ServerConfigurationsComponent
  ]
})
export class ConfigurationsModule {
  static forRoot(environment: ConfigurationEnvironment): ModuleWithProviders<ConfigurationsModule> {
    return {
      ngModule: ConfigurationsModule,
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
