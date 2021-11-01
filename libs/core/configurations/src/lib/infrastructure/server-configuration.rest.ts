import {ServerConfiguration} from '../domain/port/server-configuration.port';
import {catchError, map, Observable, throwError} from 'rxjs';
import {ServerConfigurationModel} from '../domain/model/server-configuration.model';
import {ajax} from 'rxjs/ajax';

export class ServerConfigurationRest implements ServerConfiguration {

  constructor(private rootPath: string) {
  }

  retrieve(): Observable<ServerConfigurationModel> {

    const url = this.generateUrl()
    return ajax.getJSON<ServerConfigurationModel>(url)
      .pipe(
        map(response => response),
        catchError(error => throwError(() => error))
      );
  }

  private generateUrl() {
    return `${this.rootPath}/rest/v2/configuration/server`;
  }
}
