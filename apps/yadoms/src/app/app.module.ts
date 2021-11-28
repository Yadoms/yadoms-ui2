import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ConfigurationEnvironment, ConfigurationsModule} from '@yadoms/angular-infrastructure/configurations';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConfigurationsModule.forRoot(environment as ConfigurationEnvironment)
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
