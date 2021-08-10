import { Component, OnInit } from '@angular/core';
import { Api } from '../../api/api.service';
import { NgxSpinnerService } from "ngx-spinner";

import { CommonService } from '../../api/comman.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent implements OnInit {
  questionnaireList: any = [];
  constructor(private api: Api, private spinner: NgxSpinnerService, private commonService: CommonService, private router: Router, ) { }

  ngOnInit(): void {
    this.spinner.show();
    this.getQuestionnaireList()
  }

  getQuestionnaireList() {
    this.api.get('questionnaireList').subscribe(result => {
      //console.log('resultresultresult', result)
      if (result.status == 200) {
        this.questionnaireList = result.data
      }
      this.spinner.hide();
    }, error => {
      console.log({ error })
    })
  }

  deleteQuestionnaire(questionnaire) {
    console.log('paramsparamsparamsparams', questionnaire._id)
    this.api.delete('deleteQuestionnaire/' + questionnaire._id).subscribe(result => {
      //console.log('resultresultresult', result)
      if (result.status == 200) {
        this.getQuestionnaireList()
      } else {

      }
    }, error => {
      console.log({ error })
    })
  }

  enableQuestionare(detail) {
    let data = {
      questionnaireId: detail._id
    }

    this.api.post("enableQuestionare", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.getQuestionnaireList()
      } else {
        this.commonService.err(result.message)
      }
    }, error => {
      console.log({ error })
    })
  }

}
