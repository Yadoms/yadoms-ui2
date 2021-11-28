import {ajax} from 'rxjs/ajax';
import {ServerConfigurationFactory} from '../domain/factory/server-configuration.factory';
import {ServerConfigurationRest} from './server-configuration.rest';
import {ServerConfigurationModel} from '../domain/model/server-configuration.model';
import {Observable, of, throwError} from 'rxjs';

const ROOT_PATH = 'http://localhost:8081';
const CONFIGURATION_SERVER_URL = `${ROOT_PATH}/rest/v2/configurations/server`;

describe(`Rest service`, () => {

  it(`should retrieve server configuration data properly`, done => {
    spyOnAjaxServerAndReturnMockedData(of(ServerConfigurationFactory.buildServerConfiguration()));
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
    verifyServerConfigurationData(expectedResponse, done);
  });

  it(`should trigger an error when server is down`, (done) => {
    const expectedErrorMessage = 'server is down';
    spyOnAjaxServerAndReturnMockedData(throwError(() => 'server is down'));
    retrieveServerConfiguration().subscribe({
      error: (actualErrorMessage) => {
        expect(actualErrorMessage).toEqual(expectedErrorMessage);
        done()
      },
    })
  });

  it(`should be called with the good url`, (done) => {
    spyOnAjaxServerAndReturnMockedData(of(ServerConfigurationFactory.buildServerConfiguration()));
    retrieveServerConfiguration().subscribe(
      () => {
        expect(ajax.getJSON).toHaveBeenCalledWith(CONFIGURATION_SERVER_URL);
        done();
      }
    )
  });

  function retrieveServerConfiguration() {
    return new ServerConfigurationRest(ROOT_PATH).retrieve();
  }

  function spyOnAjaxServerAndReturnMockedData(mockedResponse$: Observable<ServerConfigurationModel>) {
    jest.spyOn(ajax, 'getJSON').mockReturnValue(mockedResponse$);
  }

  function verifyServerConfigurationData(expectedResponse: ServerConfigurationModel,
                                         done: jest.DoneCallback) {

    retrieveServerConfiguration().subscribe(
      (actualResponse) => {
        expect(actualResponse).toEqual(expectedResponse);
        done();
      }
    )
  }
});


