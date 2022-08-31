import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart/bar-chart.component';



@NgModule({
  declarations: [
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    NgChartsModule
  ],
  exports : [
    PieChartComponent,
    BarChartComponent
  ]
})
export class ChartsModule { }
