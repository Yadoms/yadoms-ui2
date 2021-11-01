import {ajax} from 'rxjs/ajax';
import {ServerConfigurationFactory} from '../domain/server-configuration-factory';
import {ServerConfigurationRest} from './server-configuration.rest';
import {ServerConfigurationModel} from '../domain/model/server-configuration.model';
import {Observable, of, throwError} from 'rxjs';

const CONFIGURATION_SERVER_URL = '/rest/v2/configuration/server';

describe(`Rest service`, () => {

  it(`should retrieve server configuration data properly`, done => {
    spyOnAjaxServerAndReturnMockedData(of(ServerConfigurationFactory.buildServerConfiguration()));
    const serverConfiguration$ = new ServerConfigurationRest().retrieve();
    const expectedResponse = {
      firstStart: false,
      location: {
        status: 'autoDetected',
        latitude: 43.5312,
        longitude: 5.4554,
        altitude: 0.0,
        timezone: 'Europe/Paris',
      },
      BasicAuthentication: {
        active: false,
        user: 'admin',
        password: ''
      }
    };
    verifyServerConfigurationData(serverConfiguration$, expectedResponse, done);
  });

  it(`should trigger an error when server is down`, (done) => {
    const expectedErrorMessage = 'server is down';
    spyOnAjaxServerAndReturnMockedData(throwError(() => 'server is down'));
    const serverConfiguration$ = new ServerConfigurationRest().retrieve();
    serverConfiguration$.subscribe({
      error: (actualErrorMessage) => {
        expect(actualErrorMessage).toEqual(expectedErrorMessage);
        done()
      },
    })
  });

  it(`should be called with the good url`, (done) => {
    spyOnAjaxServerAndReturnMockedData(of(ServerConfigurationFactory.buildServerConfiguration()));
    const serverConfiguration$ = new ServerConfigurationRest().retrieve();
    serverConfiguration$.subscribe(
      () => {

        expect(ajax.getJSON).toHaveBeenCalledWith(CONFIGURATION_SERVER_URL);
        done();
      }
    )
  });

  function spyOnAjaxServerAndReturnMockedData(mockedResponse$: Observable<ServerConfigurationModel>) {
    jest.spyOn(ajax, 'getJSON').mockReturnValue(mockedResponse$);
  }

  function verifyServerConfigurationData(serverConfiguration$: Observable<ServerConfigurationModel>,
                                         expectedResponse: ServerConfigurationModel,
                                         done: jest.DoneCallback) {
    serverConfiguration$.subscribe(
      (actualResponse) => {
        expect(actualResponse).toEqual(expectedResponse);
        done();
      }
    )
  }
});



