import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { Location } from '@angular/common';
import { ChartComponent } from "ng-apexcharts";
declare var $: any;
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-create-model',
  templateUrl: './create-model.component.html',
  styleUrls: ['./create-model.component.scss']
})
export class CreateModelComponent implements OnInit {

  public chartOptions: Partial<ChartOptions>;




  url = environment.url
  modelForm: FormGroup;
  orbisModelDetail: any = [];
  isShowSpinner: boolean = true;
  constructor(private location: Location,
    private fb: FormBuilder,
    private api: Api,
    private commonService: CommonService,
    private http: HttpClient,
    private router: Router,
    private spinner: NgxSpinnerService) {
    this.modelForm = this.fb.group({
      modelId: ['', [Validators.required]],
      type: ['', [Validators.required]],
      adjustedFrequency: ['', [Validators.required]],
      modelName: ['', [Validators.required]],
      maximumDeviationAllowance: ['', [Validators.required]],
      description: ['', [Validators.required]],
    })


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
    this.spinner.show();
    $(document).on('click', 'button.minus', function () {
      $(this).parents('.inputBox').find('.formControl').attr('value', 0);
    });


    this.getorbisModel();
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
  }
  onSelect(event) {
    console.log(event.target.options[event.target.options.selectedIndex].label)

    let newForm = {
      orbisModelId: this.modelForm.value.modelId,
      adjustedFrequency: this.modelForm.value.adjustedFrequency,
      modelName: event.target.options[event.target.options.selectedIndex].label,
      maximumDeviationAllowance: this.modelForm.value.maximumDeviationAllowance,
      description: this.modelForm.value.description,
    }
    this.modelForm.patchValue(newForm);

  }
  numberOnly(event): boolean {
    console.log("sssssssss")
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  addModel() {
    console.log("helo", this.modelForm.value)
    if (this.modelForm.invalid) {
      return
    }
    this.spinner.show();
    let data = {
      orbisModelId: this.modelForm.value.modelId,
      modelName: this.modelForm.value.modelName,
      maximumDeviationAllowance: this.modelForm.value.maximumDeviationAllowance,
      adjustedFrequency: this.modelForm.value.adjustedFrequency,
      type: this.modelForm.value.type,
      description: this.modelForm.value.description,
    }

    this.api.post("createModel", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.router.navigate(['investing'])
      } else {
        this.commonService.succ('Something went wrong')
      }
      this.spinner.hide();
    }, error => {
      console.log({ error })
    })

  }

  getorbisModel() {
    this.api.get('getOrbisModels').subscribe(result => {
      console.log('resultresultresultresult', result)
      if (result.status == 200) {
        let filterResult = [];
        if (result.data[0]) {
          result.data.forEach(function (value, key) {
            // if (value.title == "Thematic - Crypto & Blockchain") {
            //   filterResult.push(value);
            // }
            filterResult.push(value);
          });
        }
        this.orbisModelDetail = filterResult;
      }
      this.isShowSpinner = false;
      this.spinner.hide();
      console.log('this.getorbisModelhhhhh', this.orbisModelDetail)
    }, error => {
      console.log({ error })
    })
  }

}
