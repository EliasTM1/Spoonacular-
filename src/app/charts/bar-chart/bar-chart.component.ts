import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'loremses1',
      'loremses2',
      'loremses3',
      'loremses4',
      'loremses5',
      'loremses6',
      'loremses7',
      'loremses8',
      'loremses9',
      'loremses0',
      'loremses11',
      'loremses22',
      'loremses33',
      'loremses44',
      'loremses0',
      'loremses11',
      'loremses22',
      'loremses33',
      'loremses44',
    ],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 80, 81, 56, 55, 40],
        label: 'Series A',
      },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  constructor() {}
}
