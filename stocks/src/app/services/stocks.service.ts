import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stock } from '../models/stock';
import { Observable, of } from 'rxjs';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];
let apiUri: string = 'https://angular2-in-action-api.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class StocksService {

  constructor(private http: HttpClient) { }

  getStocks(): Array<string> {
    return stocks.slice();
  }

  addStock(symbol: string): Array<string> {
    stocks.push(symbol);
    return this.getStocks();
  }

  removeStock(symbol: string): Array<string> {
    stocks.splice(stocks.indexOf(symbol), 1);
    return this.getStocks();
  }

  loadStocks(symbols: Array<string>): Observable<Array<Stock>> {
    if (!symbols) {
      return of();
    }

    return this.http.get<Array<Stock>>(`${apiUri}/stocks/snapshot?symbols=${stocks.join()}`);
  }
}
