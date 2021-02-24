import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/models/stock';
import { StocksService } from 'src/app/services/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stocks: Array<Stock> = [];
  symbols: Array<string> = [];

  constructor(private stocksService: StocksService) {
    this.symbols = this.stocksService.getStocks();
  }

  ngOnInit() {
    this.stocksService.loadStocks(['AAPL']).subscribe(stocks => {
      this.stocks = stocks;
    });
  }

}
