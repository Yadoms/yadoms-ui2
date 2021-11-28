import {ServerConfiguration} from '../domain/port/server-configuration.port';
import {Observable, of} from 'rxjs';
import {ServerConfigurationModel} from '../domain/model/server-configuration.model';
import {ServerConfigurationFactory} from '../domain/factory/server-configuration.factory';

export class ServerConfigurationInMemory implements ServerConfiguration {
  retrieve(): Observable<ServerConfigurationModel> {
    return of<ServerConfigurationModel>(
      ServerConfigurationFactory.buildServerConfiguration()
    );
  }
}
