import { Component, OnInit, ViewChild } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
declare var $: any;
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexTooltip,
} from "ng-apexcharts";

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
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  // @ViewChild("chart") chart: ChartComponent;
  public chartLineSparkline1Options: Partial<ChartOptions>;
  public chartLineSparkline2Options: Partial<ChartOptions>;
  public chartLineSparkline3Options: Partial<ChartOptions>;
  public chartLineSparkline4Options: Partial<ChartOptions>;
  public chartLineSparkline5Options: Partial<ChartOptions>;
  public chartLineSparkline6Options: Partial<ChartOptions>;
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
  constructor() { 
    this.chartLineSparkline1Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline2Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline3Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline4Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline5Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline6Options = {
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

  ngOnInit(){
    this.chart1()
    this.chart2()
    this.chart3()

    $(document).on('click','.ulAumOne li',function(){
      $('.ulAumOne li').removeClass('active');
      $(this).addClass('active');
    });
    
    $(document).on('click','.ulAumTwo li',function(){
      $('.ulAumTwo li').removeClass('active');
      $(this).addClass('active');
    });

    $(document).on('click','.ulAumThree li',function(){
      $('.ulAumThree li').removeClass('active');
      $(this).addClass('active');
    });

    $(document).on('click','.ulAumFour li',function(){
      $('.ulAumFour li').removeClass('active');
      $(this).addClass('active');
    });

    $(document).on('click','.FilterDropdown',function(){
      $(this).addClass('active')
      $('.managedDropdownShow').slideDown();
    });
    $(document).on('click','.FilterDropdown.active',function(){
      $(this).removeClass('active')
      $('.managedDropdownShow').slideUp();
    });
  }

  chart1(){
/* Chart code */
// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart
let chart = am4core.create("chartdiv", am4charts.XYChart);
chart.paddingRight = 20;


chart.data = generateChartData();

let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
dateAxis.baseInterval = {
  "timeUnit": "minute",
  "count": 1
};
dateAxis.tooltipDateFormat = "HH:mm, d MMMM";

let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
valueAxis.tooltip.disabled = true;
// valueAxis.renderer.grid.template.stroke = am4core.color("#eeeeee");
// valueAxis.title.text = "Unique visitors";

let series = chart.series.push(new am4charts.LineSeries());
series.dataFields.dateX = "date";
series.dataFields.valueY = "visits";
series.tooltipText = "Visits: [bold]{valueY}[/]";
series.fillOpacity = 0.3;
dateAxis.renderer.grid.template.stroke = am4core.color("#ffffff");
valueAxis.renderer.grid.template.stroke = am4core.color("#908f8f");

chart.cursor = new am4charts.XYCursor();
chart.cursor.lineY.opacity = 0;
// chart.scrollbarX = new am4charts.XYChartScrollbar();
// chart.scrollbarX.series.push(series);


dateAxis.start = 0.8;
dateAxis.keepSelection = true;



function generateChartData() {
    let chartData = [];
    // current date
    let firstDate = new Date();
    // now set 500 minutes back
    firstDate.setMinutes(firstDate.getDate() - 500);

    // and generate 500 data items
    let visits = 500;
    for (var i = 0; i < 500; i++) {
        let newDate = new Date(firstDate);
        // each time we add one minute
        newDate.setMinutes(newDate.getMinutes() + i);
        // some random number
        visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
        // add data item to the array
        chartData.push({
            date: newDate,
            visits: visits
        });
    }
    return chartData;
}

  $(document).ready(function(){
    $("g[aria-labelledby]").hide();
    })
  }

  chart2(){
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart
    let chart = am4core.create("chartdivTwo", am4charts.XYChart);
    chart.paddingRight = 20;
    
    chart.data = generateChartData();
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      "timeUnit": "minute",
      "count": 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    // valueAxis.title.text = "Unique visitors";
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = "Visits: [bold]{valueY}[/]";
    series.fillOpacity = 0.3;
    
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);
    
    
    dateAxis.start = 0.8;
    dateAxis.keepSelection = true;
    
    
    
    function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);
    
        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
            let newDate = new Date(firstDate);
            // each time we add one minute
            newDate.setMinutes(newDate.getMinutes() + i);
            // some random number
            visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
            // add data item to the array
            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
      })
  }
  
  chart3(){
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart
    let chart = am4core.create("chartdivThree", am4charts.XYChart);
    chart.paddingRight = 20;
    
    chart.data = generateChartData();
    
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = {
      "timeUnit": "minute",
      "count": 1
    };
    dateAxis.tooltipDateFormat = "HH:mm, d MMMM";
    
    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    // valueAxis.title.text = "Unique visitors";
    
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "visits";
    series.tooltipText = "Visits: [bold]{valueY}[/]";
    series.fillOpacity = 0.3;
    
    
    chart.cursor = new am4charts.XYCursor();
    chart.cursor.lineY.opacity = 0;
    // chart.scrollbarX = new am4charts.XYChartScrollbar();
    // chart.scrollbarX.series.push(series);
    
    
    dateAxis.start = 0.8;
    dateAxis.keepSelection = true;
    
    
    
    function generateChartData() {
        let chartData = [];
        // current date
        let firstDate = new Date();
        // now set 500 minutes back
        firstDate.setMinutes(firstDate.getDate() - 500);
    
        // and generate 500 data items
        let visits = 500;
        for (var i = 0; i < 500; i++) {
            let newDate = new Date(firstDate);
            // each time we add one minute
            newDate.setMinutes(newDate.getMinutes() + i);
            // some random number
            visits += Math.round((Math.random()<0.5?1:-1)*Math.random()*10);
            // add data item to the array
            chartData.push({
                date: newDate,
                visits: visits
            });
        }
        return chartData;
    }
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
      })
  }

 
}
