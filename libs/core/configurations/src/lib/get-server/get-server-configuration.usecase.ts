import {ServerConfiguration} from '../domain/port/server-configuration.port';
import {Observable} from 'rxjs';
import {ServerConfigurationModel} from '../domain/model/server-configuration.model';

export class GetServerConfigurationUsecase {

  constructor(private server: ServerConfiguration) {
  }

  retrieve(): Observable<ServerConfigurationModel> {
    return this.server.retrieve();
  }
}
