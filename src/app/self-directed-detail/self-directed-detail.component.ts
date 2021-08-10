import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ChartComponent } from "ng-apexcharts";
declare var $:any;


export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-self-directed-detail',
  templateUrl: './self-directed-detail.component.html',
  styleUrls: ['./self-directed-detail.component.scss']
})
export class SelfDirectedDetailComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  constructor( private _location: Location ) { 

    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],
     
      chart: {
        width: "400px",
        type: "pie"
  
      },


      labels: [
        " ",
        "",
        "",
        "",
        "",
        ""
      ],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            fill: {
              colors: ['#000', '#66DA26', '#546E7A', '#E91E63', '#FF9800']
            },
        
            legend: {
              show:false,
              position: "bottom"
            },
      
          }
        }
      ]
    };
  }

  ngOnInit() {

  }

  backClicked() {
    this._location.back();
  }
}
