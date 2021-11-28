import {Observable} from 'rxjs';
import {ServerConfigurationModel} from '../model/server-configuration.model';

export interface ServerConfiguration {
  retrieve(): Observable<ServerConfigurationModel>;
}
