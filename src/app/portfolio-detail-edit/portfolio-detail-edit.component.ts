import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { Location } from '@angular/common';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from "src/environments/environment";
import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';

@Component({
  selector: 'app-portfolio-detail-edit',
  templateUrl: './portfolio-detail-edit.component.html',
  styleUrls: ['./portfolio-detail-edit.component.scss']
})
export class PortfolioDetailEditComponent implements OnInit {
  url = environment.url
  portfolioDetail: any = []
  assignedModelDetail: any = []
  portfolioFrom: FormGroup;
  modelList: any = [];
  constructor(private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: Api,
    private commonService: CommonService,
    private fb: FormBuilder,

  ) { }

  ngOnInit() {
    var options = {
      series: [44, 55, 41, 17, 15],
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

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    this.getPortfolioDetail()

    this.getModelList()
    this.portfolioFrom = this.fb.group({
      "modelId": ['', [Validators.required]],
      "portfolioId": ['', [Validators.required]],
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

  getPortfolioDetail() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.api.get('portfolioDetail/' + params['id']).subscribe(result => {
        console.log('resultresultresult', result)
        if (result.status == 200) {
          if (result.data) {
            this.portfolioDetail = result.data[0];
            if (this.portfolioDetail.models[0]) {
              this.assignedModelDetail = this.portfolioDetail.models[0]
            }

            let newForm = {
              "portfolioId": this.portfolioDetail._id,
              "modelId": this.portfolioDetail.modelId,
              "name": this.portfolioDetail.name,
              "riskLevel": this.portfolioDetail.riskLevel,
              "drift": this.portfolioDetail.drift,
              "description": this.portfolioDetail.description
            }

            this.portfolioFrom.patchValue(newForm);


            console.log('this.portfolioFromthis.portfolioFromthis.portfolioFromthis.portfolioFrom', this.portfolioFrom.value)
          }
        } else {
          this.commonService.err(result.message)
          this.router.navigate(['investing'])
        }
        // this.isShowSpinner = false
      }, error => {
        console.log({ error })
      })
    });
  }

  addPortfolio() {
    if (this.portfolioFrom.invalid) {
      this.commonService.err("All fields are required.")
      return;
    }
    let data = {
      portfolioId: this.portfolioFrom.value.portfolioId,
      modelId: this.portfolioFrom.value.modelId,
      name: this.portfolioFrom.value.name,
      riskLevel: this.portfolioFrom.value.riskLevel,
      drift: this.portfolioFrom.value.drift,
      description: this.portfolioFrom.value.description,
    }

    console.log("fata", data)

    this.api.post("editPortfolio", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.router.navigate(['portfolio-detail/', this.portfolioFrom.value.portfolioId])
      } else {
        this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })

  }

}
