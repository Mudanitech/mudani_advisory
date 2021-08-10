import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
declare var $;
@Component({
  selector: 'app-matching-portfolio',
  templateUrl: './matching-portfolio.component.html',
  styleUrls: ['./matching-portfolio.component.scss']
})
export class MatchingPortfolioComponent implements OnInit {
  questionDetail: any = [];
  modelDetail: any = [];
  orbisModelDetail: any = [];
  portfolioList: any = [];
  form: FormGroup;
  constructor(private fb: FormBuilder, private location: Location, private api: Api, private activatedRoute: ActivatedRoute, private commonService: CommonService, private router: Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    // $(document).ready(function () {
    //   alert("sssssssss");
    // })
    this.spinner.show();
    this.getMatchedPortfolio()
    this.getorbisModel()
    this.getPortfolioList()
    this.form = this.fb.group({
      "startrange": ['', Validators.required],
      'endrange': ['', Validators.required],
      'models': ['', Validators.required],
    });
  }

  getMatchedPortfolio() {

    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.api.get('getQuestionairePortfolio/' + params['id']).subscribe(result => {
        console.log('xxx', result)
        if (result.status == 200) {
          if (result.data) {
            this.questionDetail = result.data;
            this.modelDetail = this.questionDetail;
            console.log('this.modelDetail', this.modelDetail)
          } else {
            this.commonService.err("Questionaire not found.")
            this.router.navigate(['questionnaire'])
          }

        }

      }, error => {
        console.log({ error })
      })




    });

  }

  getPortfolioList() {
    this.api.get('portfolioList').subscribe(result => {
      //console.log('resultresultresult', result)
      if (result.status == 200) {
        this.portfolioList = result.data
      }
      this.spinner.hide();
    }, error => {
      console.log({ error })
    })
  }

  getorbisModel() {

    this.activatedRoute.params.subscribe(params => {
      this.api.get('getOrbisModels').subscribe(result => {
        console.log('uuuuuuuuuuuuuuuuuuuuu', result)
        if (result.status == 200) {
          console.log('resmodels', result.data)

          let filterResult = [];
          // var filterResult = result.data.find(obj => {
          //   return obj.title != " Thematic - Crypto & Blockchain "
          // })

          result.data.forEach(function (value, key) {
            if (value.title != "Thematic - Crypto & Blockchain") {
              filterResult.push(value);
            }

          });


          this.orbisModelDetail = filterResult;
        }
      }, error => {
        console.log({ error })
      })


    });

  }

  numberOnly(event): boolean {
    console.log("sssssssss")
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  closePops() {
    $('#refer').modal('hide');
  }

  saveData() {
    console.log('this.form.value', this.form.value);
    // return true;
    const questionnaire_id = this.activatedRoute.params.subscribe(params => {



      var result = this.orbisModelDetail.find(obj => {
        return obj.id == this.form.value.models
      })

      const reqData = {
        questionnaire_id: params['id'],
        portfolioId: this.form.value.models,
        minScore: this.form.value.startrange,
        maxScore: this.form.value.endrange
      }
      console.log('newDatanewDatanewDatanewData', reqData)
      this.api.post("assignedPortfolio", reqData).subscribe(result => {
        if (result.status == 200) {
          this.commonService.succ(result.message)
          this.router.navigate(['matching-portfolio/' + params['id']])
          this.getMatchedPortfolio()
          $('#refer').modal('hide');
        } else {
          this.commonService.err(result.message)
        }
      }, error => {
        console.log({ error })
      })
    });
  }

  deletePortfolio(data) {

    // $('#confirmDylog').modal('show');
    this.activatedRoute.params.subscribe(params => {
      const newData = {
        questionnaire_id: params['id'],
        quesPortfolioId: data._id
      }
      this.api.post("deletePortfolio", newData).subscribe(result => {
        if (result.status == 200) {
          this.commonService.succ(result.message)
          this.router.navigate(['matching-portfolio/' + params['id']])
          this.getMatchedPortfolio()
          console.log('newData', this.questionDetail)
        } else {
          this.commonService.err(result.message)
        }
      }, error => {
        console.log({ error })
      })
    });
  }

}
