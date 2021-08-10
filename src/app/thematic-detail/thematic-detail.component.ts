import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { Location } from '@angular/common';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
import { ChartComponent } from "ng-apexcharts";
declare var $: any;

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-thematic-detail',
  templateUrl: './thematic-detail.component.html',
  styleUrls: ['./thematic-detail.component.scss']
})


export class ThematicDetailComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  thematicDetail: any = [];
  assignedModelDetail: any = [];
  isShowSpinner: boolean = true;
  constructor(private location: Location, private api: Api, private activatedRoute: ActivatedRoute, private commonService: CommonService, private router: Router,
    private spinner: NgxSpinnerService) {
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
              show: false,
              position: "bottom"
            },

          }
        }
      ]
    };
  }

  ngOnInit() {



    this.getThematicDetail()
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
  }

  getThematicDetail() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.api.get('thematicDetail/' + params['id']).subscribe(result => {
        console.log('resultresultresult', result)
        if (result.status == 200) {
          if (result.data) {
            this.thematicDetail = result.data[0]
            if (this.thematicDetail.models[0]) {
              this.assignedModelDetail = this.thematicDetail.models[0]
            }
            console.log('this.thematicDetailthis.thematicDetail', this.thematicDetail)
          }
        } else {
          this.commonService.err("Thematic not found")
          this.router.navigate(['investing'])
        }
        this.isShowSpinner = false
      }, error => {
        console.log({ error })
      })
    });
  }
}
