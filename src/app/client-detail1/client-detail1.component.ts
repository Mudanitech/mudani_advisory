import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { ChartComponent } from "ng-apexcharts";
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle
} from "ng-apexcharts";
declare var $;

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-client-detail1',
  templateUrl: './client-detail1.component.html',
  styleUrls: ['./client-detail1.component.scss']
})
export class ClientDetail1Component implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  constructor() {

    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],
     
      chart: {
        width: "500px",
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

  ngOnInit(): void {
    var options = {
    
      chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };

    var chart = new ApexCharts(document.querySelector("#chart2"), options);
    chart.render();
    var chart = new ApexCharts(document.querySelector("#chart3"), options);
    chart.render();

    this.graph1();
    this.graph2();

    $(document).on('click','.ulAumFive li',function(){
      $('.ulAumFive li').removeClass('active');
      $(this).addClass('active');
    });
    
    $(document).on('click','.ulAumSix li',function(){
      $('.ulAumSix li').removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click','.Allul1 ul li a',function(){
      $('.Allul1 ul li a').removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click','.Allul2 ul li a',function(){
      $('.Allul2 ul li a').removeClass('active');
      $(this).addClass('active');
    });
  }

  graph1(){
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart
    let chart = am4core.create("graphdiv", am4charts.XYChart);
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
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
      })
    
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
  }

  graph2(){
    /* Chart code */
    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    // Create chart
    let chart = am4core.create("graphdivTwo", am4charts.XYChart);
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
    
    $(document).ready(function(){
      $("g[aria-labelledby]").hide();
      })
    
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
  }
}
