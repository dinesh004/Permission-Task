import { Component } from '@angular/core';
import { SharedDataService } from './service/shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [SharedDataService]
})
export class AppComponent {
  title = 'admin-panel-layout';
  sideBarOpen = true;

  constructor(private shared:SharedDataService) { }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
