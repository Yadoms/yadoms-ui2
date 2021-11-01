import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ConfigurationEnvironment, ConfigurationModule} from '@yadoms-ui2/angular-infrastructure/configuration';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ConfigurationModule.forRoot(environment as ConfigurationEnvironment)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
