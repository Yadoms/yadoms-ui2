import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ServerConfigurationsComponent} from './server-configurations.component';
import {GET_SERVER_CONFIGURATION} from "../dependencies-injection/get-server-configuration.factory";
import {environment} from "../../../../../../apps/yadoms/src/environments/environment";
import {GetServerConfigurationUsecase, ServerConfigurationRest} from "@yadoms/core/configurations";

describe('ServerConfigurationsComponent', () => {
  let component: ServerConfigurationsComponent;
  let fixture: ComponentFixture<ServerConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerConfigurationsComponent ],
      providers: [{
        provide: GET_SERVER_CONFIGURATION,
        useValue: new GetServerConfigurationUsecase(new ServerConfigurationRest(environment.getServerConfiguration))
      }],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerConfigurationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
