import { Component } from '@angular/core';
import { Stock } from './models/stock';
import { StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'stocks';

  constructor() {}
}
