import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTooltip,
} from "ng-apexcharts";
declare var $: any;

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  tooltip: ApexTooltip;
};

const sparkLineData = [
  47,
  45,
  54,
  38,
  56,
  24,
  65,
  31,
  37,
  39,
  62,
  51,
  35,
  41,
  35,
  27,
  93,
  53,
  61,
  27,
  54,
  43,
  19,
  46
];

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {
  public chartLineSparkline7Options: Partial<ChartOptions>;
  public chartLineSparkline8Options: Partial<ChartOptions>;
  public chartLineSparkline9Options: Partial<ChartOptions>;
  chart: {
    type: "area",
    height: 160,
    sparkline: {
      enabled: true
    }
  }
  public commonLineSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "line",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function(seriesName) {
            return "";
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  constructor(private location: Location) { 
    this.chartLineSparkline7Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline8Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline9Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };
  }
  public randomizeArray(arg): number[] {
    var array = arg.slice();
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }
  ngOnInit() {
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
    }

}
