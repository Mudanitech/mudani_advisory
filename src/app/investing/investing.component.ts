import { Component, OnInit } from '@angular/core';
import { Api } from '../../api/api.service';
import { NgxSpinnerService } from "ngx-spinner";
// import { $ } from 'protractor';
declare var $;

@Component({
  selector: 'app-investing',
  templateUrl: './investing.component.html',
  styleUrls: ['./investing.component.scss']
})
export class InvestingComponent implements OnInit {
  modelList: any = [];
  portfolioList: any = [];
  thematicList: any = [];
  constructor(private api: Api, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getModelList()
    this.getPortfolioList()
    this.getThematicList()
  }

  getModelList() {
    this.api.get('modelList').subscribe(result => {
      //console.log('resultresultresult', result)
      if (result.status == 200) {
        this.modelList = result.data
      }
      this.spinner.hide();
    }, error => {
      console.log({ error })
    })
  }

  getPortfolioList() {
    this.api.get('portfolioList').subscribe(result => {
      //console.log('resultresultresult', result)
      if (result.status == 200) {
        this.portfolioList = result.data
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }

  getThematicList() {
    this.api.get('thematicList').subscribe(result => {
      if (result.status == 200) {
        this.thematicList = result.data
        // console.log('thematicListthematicListthematicListthematicList', this.thematicList)
      }
    })

  }

  canActiveTabs(a, b) {
    console.log(a)
    console.log(b)
    $('.nav-link').removeClass('active')
    $('.tab-pane').removeClass('active')
    $('#' + a).addClass('active')
    $('#' + b).addClass('active')
    $('#' + b).removeClass('fade')
  }

}
