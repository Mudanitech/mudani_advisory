import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';

@Component({
  selector: 'app-portfolio-detail',
  templateUrl: './portfolio-detail.component.html',
  styleUrls: ['./portfolio-detail.component.scss']
})
export class PortfolioDetailComponent implements OnInit {
  portfolioDetail: any = []
  assignedModelDetail: any = []
  constructor(private location: Location,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: Api,
    private commonService: CommonService) { }

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
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
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

            console.log('this.thematicDetailthis.thematicDetail', this.assignedModelDetail)
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

}
