import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
// import { Location } from '@angular/common';
import { Location } from '@angular/common';
import { Api } from '../../api/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../api/comman.service';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
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
  selector: 'app-model-detail',
  templateUrl: './model-detail.component.html',
  styleUrls: ['./model-detail.component.scss']
})
export class ModelDetailComponent implements OnInit {
  public chartOptions: Partial<ChartOptions>;

  modelDetail: any = [];
  ticketData: any = {};
  isShowSpinner: boolean = true;
  tickertForm: FormGroup;
  addTickerform: FormGroup;

  constructor(private location: Location, private api: Api, private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService, private commonService: CommonService, private router: Router, private fb: FormBuilder) {

    this.chartOptions = {
      series: [25, 15, 44, 55, 41, 17],

      chart: {
        width: "400px",
        type: "pie"

      },


      labels: [
        "ffff ",
        "eeee",
        "rrrr",
        "hhhh",
        "aaa",
        "sdddd"
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

  summaryOverViewTab: boolean = false;
  clientTab: boolean = false;
  investingTab: boolean = false;
  transactionTab: boolean = false;

  modalTab: boolean = false;
  portfolioTab: boolean = false;
  tradingTab: boolean = false;
  thematicTab: boolean = false;
  orderTab: boolean = false;
  rewardsTab: boolean = false;


  ngOnInit() {
    this.spinner.show();
    this.tickertForm = this.fb.group({
      "title": ['', Validators.required]
    });




    this.getModelDetail()
  }
  // backClicked() {
  // this._location.back();
  // window.history.back();
  // this.location.back()

  // }
  backClicked() {
    localStorage.setItem("fromInvesting", "true")
    this.location.back()
  }

  getModelDetail() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.api.get('modelDetail/' + params['id']).subscribe(result => {
        console.log('resultresultresult', result)
        if (result.status == 200) {
          if (result.data) {
            this.modelDetail = result.data
            console.log('this.thematicDetailthis.thematicDetail', this.modelDetail)
          }
        } else {
          this.commonService.err(result.message)
          this.router.navigate(['investing'])
        }
        this.isShowSpinner = false
      }, error => {
        console.log({ error })
      })
    });
  }

  searchTicker() {

    console.log('hiiii')
    if (this.tickertForm.invalid) {
      this.commonService.err("All fields are required.")
      return;
    }
    this.isShowSpinner = true
    console.log(this.tickertForm.value);
    let data = {
      ticker: this.tickertForm.value.title
    }
    this.isShowSpinner = true
    this.api.post("getOrbisTicker", data).subscribe(result => {
      console.log(result)
      if (result.status == 200) {
        // if (result.data[0].isin) {
        if (result.data[0]) {
          // this.addTickerform = this.fb.group({
          //   "symbol": [result.data[0].symbol, Validators.required],
          //   "companyName": [result.data[0].companyName, Validators.required],
          //   "latestPrice": [200, Validators.required],
          //   "holdingType": ['', Validators.required],
          //   "targetValue": ['0', Validators.required],
          //   "upperValue": ['0', Validators.required],
          //   "lowerupperValue": ['0', Validators.required],
          // });
          this.ticketData = {
            symbol: result.data[0].symbol,
            companyName: result.data[0].companyName,
            tickerImage: result.result.logo_square,
            latestPrice: 200,
            holdingType: '',
            targetValue: 0,
            upperValue: 0,
            lowerupperValue: 0
          }
        }
        console.log(this.ticketData)
        // } else {
        //   $('#referError').modal('show');
        // }
        this.isShowSpinner = false
      } else {
        this.commonService.err(result.message)
      }
    }, error => {
      console.log({ error })
    })

  }

  saveData(a, b) {
    if (!a.value) {
      // alert("Holding Type Is Required")
      this.commonService.err("Holding Type Is Required")
      return false;
    }
    if (!b.value) {
      this.commonService.err("Target Value Is Required")
      // alert("Target Value Is Required")
      return false;
    }
    console.log(a.value, b.value)
    this.activatedRoute.params.subscribe(params => {
      let data = {
        holdingType: a.value,
        targetValue: b.value,
        symbol: this.ticketData.symbol,
        tickerImage: this.ticketData.tickerImage,
        companyName: this.ticketData.companyName,
        latestPrice: this.ticketData.latestPrice,
        upperValue: this.ticketData.upperValue,
        lowerupperValue: this.ticketData.lowerupperValue
      }
      let postData = {
        model_id: params['id'],
        models: data,
        symbol: this.ticketData.symbol,
      }
      this.spinner.show();

      this.api.post("addModelHolding", postData).subscribe(result => {
        if (result.status == 200) {
          this.commonService.succ(result.message)
          // this.router.navigate(['model-detail/' + params['id']])
          this.getModelDetail();
          this.ticketData = {}
        } else {
          this.commonService.err(result.message)
        }
        this.spinner.hide();
      }, error => {
        console.log({ error })
      })
    })
  }

  deleteHolding(data) {
    if (confirm("Are you sure to delete ")) {
      this.activatedRoute.params.subscribe(params => {
        const newData = {
          model_id: params['id'],
          symbol: data.symbol
        }
        this.api.post("deleteModelHolding", newData).subscribe(result => {
          if (result.status == 200) {
            this.commonService.succ(result.message)
            this.getModelDetail();
          } else {
            this.commonService.err(result.message)
          }
        }, error => {
          console.log({ error })
        })
      });
    }
  }
  deleteModels(data) {
    if (confirm("Are you sure to delete ")) {
      this.activatedRoute.params.subscribe(params => {
        const newData = {
          model_id: params['id'],
        }
        this.api.post("deleteModel", newData).subscribe(result => {
          if (result.status == 200) {
            this.commonService.succ(result.message)
            this.router.navigate(['investing'])
          } else {
            this.commonService.err(result.message)
          }
        }, error => {
          console.log({ error })
        })
      });
    }
  }
}
