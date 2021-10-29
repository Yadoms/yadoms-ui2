import {Observable} from 'rxjs';

export interface ServerConfiguration {
  retrieves(): Observable<ServerConfiguration>;
}
