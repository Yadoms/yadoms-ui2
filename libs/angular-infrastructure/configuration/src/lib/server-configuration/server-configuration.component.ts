import {Component, Inject, OnInit} from '@angular/core';
import {GET_SERVER_CONFIGURATION} from '../dependencies-injection/get-server-configuration-factory';
import {GetServerConfigurationUsecase} from '@yadoms-ui2/core/configurations';

@Component({
  selector: 'yadoms-ui2-server-configuration',
  templateUrl: './server-configuration.component.html',
  styleUrls: ['./server-configuration.component.css']
})
export class ServerConfigurationComponent implements OnInit {

  constructor(@Inject(GET_SERVER_CONFIGURATION)
              private serverConfiguration: GetServerConfigurationUsecase) { }

  ngOnInit(): void {
    this.serverConfiguration.retrieve().subscribe((sc) => {
      console.log(sc);
    })
  }

}
