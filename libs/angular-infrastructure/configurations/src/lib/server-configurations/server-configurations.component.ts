import {Component, Inject, OnInit} from '@angular/core';
import {GET_SERVER_CONFIGURATION} from '../dependencies-injection/get-server-configuration.factory';
import {GetServerConfigurationUsecase} from '@yadoms/core/configurations';

@Component({
  selector: 'yadoms-server-configurations',
  templateUrl: './server-configurations.component.html',
  styleUrls: ['./server-configurations.component.css']
})
export class ServerConfigurationsComponent implements OnInit {

  serverConfigurationView = {};

  constructor(@Inject(GET_SERVER_CONFIGURATION)
              private serverConfigurationService: GetServerConfigurationUsecase) {
  }

  ngOnInit(): void {
    this.serverConfigurationService.retrieve().subscribe((sc) => {
      this.serverConfigurationView = sc;
    })
  }
}
