import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { ChartComponent } from "ng-apexcharts";
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from "src/environments/environment";
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { Router } from '@angular/router';
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
  selector: 'app-create-portfolio',
  templateUrl: './create-portfolio.component.html',
  styleUrls: ['./create-portfolio.component.scss']
})
export class CreatePortfolioComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;

  url = environment.url
  portfolioFrom: FormGroup;
  modelList: any = [];
  constructor(private fb: FormBuilder, private api: Api, private commonService: CommonService, private router: Router, ) {

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

    $(document).on('click','button.minus',function(){
      $(this).parents('.inputBox').find('.formControl').attr('value',0);
    });

    this.getModelList()
    this.portfolioFrom = this.fb.group({
      "modelId": ['', [Validators.required]],
      "name": ['', [Validators.required]],
      "riskLevel": ['', [Validators.required]],
      "drift": ['', [Validators.required]],
      "description": ['', [Validators.required]],
    })

  
  }

  getModelList() {
    this.api.get('modelList').subscribe(result => {
      //console.log('resultresultresult', result)
      if (result.status == 200) {
        let filterResult = [];
        result.data.forEach(function (value, key) {
          if (value.type == 1) {
            filterResult.push(value);
          }

        });
        this.modelList = filterResult
      }
    }, error => {
      console.log({ error })
    })
  }

  addPortfolio() {
    if (this.portfolioFrom.invalid) {
      this.commonService.err("All fields are required.")
      return;
    }
    let data = {
      modelId: this.portfolioFrom.value.modelId,
      name: this.portfolioFrom.value.name,
      riskLevel: this.portfolioFrom.value.riskLevel,
      drift: this.portfolioFrom.value.drift,
      description: this.portfolioFrom.value.description,
    }

    this.api.post("createPortfolio", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.router.navigate(['investing'])
      } else {
        this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })

  }

}
