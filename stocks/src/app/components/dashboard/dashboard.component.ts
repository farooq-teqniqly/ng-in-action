import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks$: Observable<Array<Stock>>;
  stocks: Array<Stock> = [];
  symbols: Array<string> = [];

  constructor(private stocksService: StocksService) {
    this.symbols = this.stocksService.getStocks();
  }

  ngOnInit() {
    this.stocks$ = this.stocksService.loadStocks(['AAPL']);
    // this.stocksService.loadStocks(['AAPL']).subscribe(stocks => {
    //   this.stocks = stocks;
    // });
  }

}
