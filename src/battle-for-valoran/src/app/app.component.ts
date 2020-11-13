import { Component, AfterViewInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  title = 'battle-for-valoran';

  alertNow = (args: any): void => {
    alert('desceu');
  };

  ngAfterViewInit() {
    Feather.replace();
  }
}
