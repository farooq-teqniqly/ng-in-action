import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SummaryComponent implements OnInit {

  @Input() stock: any;

  constructor() { }

  ngOnInit() {
  }

  isNegative(): boolean {
    return this.stock && this.stock.change < 0;
  }

  isPositive(): boolean {
    return this.stock && this.stock.change > 0;
  }

}
