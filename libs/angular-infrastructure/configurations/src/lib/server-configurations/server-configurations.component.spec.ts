import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerConfigurationsComponent } from './server-configurations.component';

describe('ServerConfigurationsComponent', () => {
  let component: ServerConfigurationsComponent;
  let fixture: ComponentFixture<ServerConfigurationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServerConfigurationsComponent ]
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
