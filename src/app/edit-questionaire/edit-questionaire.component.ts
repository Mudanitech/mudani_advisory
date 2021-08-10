import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";
declare var $;
@Component({
  selector: 'app-edit-questionaire',
  templateUrl: './edit-questionaire.component.html',
  styleUrls: ['./edit-questionaire.component.scss']
})
export class EditQuestionaireComponent implements OnInit {
  questionDetail: any = [];
  form: FormGroup;
  constructor(private api: Api, private activatedRoute: ActivatedRoute, private fb: FormBuilder, private commonService: CommonService, private router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getQuestionaireDetail()
    this.form = this.fb.group({
      "questionnaire_id": ['', Validators.required],
      "title": ['', Validators.required],
      'description': ['', Validators.required],
      'questions': this.fb.array([
        this.initQuestion()
      ])
    });


  }

  getQuestionaireDetail() {
    this.activatedRoute.params.subscribe(params => {
      console.log(params['id'])
      this.api.get('getQuestionaireDetail/' + params['id']).subscribe(result => {
        console.log('resultresultresult', result.data[0])
        if (result.status == 200) {
          this.questionDetail = result.data[0]
          this.patchQuestionValue(this.questionDetail);
        }
        this.spinner.hide();
      }, error => {
        console.log({ error })
      })
    });


  }

  initQuestion() {
    return this.fb.group({
      'question_id': [''],
      'question': ['', Validators.required],
      'answers': this.fb.array([
        this.initAnswer()
      ])
    })
  }

  initAnswer() {
    return this.fb.group({
      'answer_id': [''],
      'answer': ['', Validators.required],
      'value': ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
  }



  patchQuestionValue(data: any) {
    if (data) {
      if (data.questions) {
        let questionResult = [];

        data.questions.forEach((question: any, index) => {
          if (index != 0) {
            this.addQuestion();
          }
          let answerResult = [];
          if (question.answers) {
            question.answers.forEach((answer: any, answerIndex) => {
              if (answerIndex != 0) {
                this.addAnswer(index);
              }
              let answerObj = {
                'answer_id': answer._id,
                'answer': answer.answer,
                'value': answer.value
              }
              answerResult.push(answerObj);
            })
          }

          let questionObj = {
            'question_id': question._id,
            'question': question.question,
            'answers': answerResult
          }
          questionResult.push(questionObj);
        })
        let newForm = {
          "questionnaire_id": data._id,
          "title": data.title,
          "description": data.description,
          // "questions": questionResult
          // "questions": (<FormArray>this.form.controls['questions']).patchValue(questionResult)
        }
        console.log('rrrrrrrrrrrrrrrrrr', newForm);
        console.log('datadatadatadata', data);
        this.form.patchValue(newForm);
        (<FormArray>this.form.controls['questions']).patchValue(questionResult);
        console.log('newFormnewFormnewForm', this.form.value);
      }
    }
  }

  addQuestion() {
    const control = <FormArray>this.form.controls['questions'];
    control.push(this.initQuestion());
  }

  removeQuestion(ix) {
    const control = (<FormArray>this.form.controls['questions']);
    control.removeAt(ix);
  }


  addAnswer(ix) {
    const control = (<FormArray>this.form.controls['questions']).at(ix).get('answers') as FormArray;
    control.push(this.initAnswer());
  }
  removeAnswer(ix, iy) {
    console.log(ix + ' / ' + iy);
    console.log((<FormArray>this.form.controls['questions']).at(ix).get('answers'));
    const control = (<FormArray>this.form.controls['questions']).at(ix).get('answers') as FormArray;
    control.removeAt(iy);
  }

  // Move form control item up or down in the array
  move(shift, currentIndex) {
    const rules = (<FormArray>this.form.controls['questions']);

    let newIndex: number = currentIndex + shift;
    if (newIndex === -1) {
      newIndex = (<FormArray>this.form.controls['questions']).length - 1;
    } else if (newIndex == rules.length) {
      newIndex = 0;
    }


    const currentGroup = (<FormArray>this.form.controls['questions']).at(currentIndex);
    rules.removeAt(currentIndex);;
    rules.insert(newIndex, currentGroup)
  }

  checkMaxData(event) {
    let MaxData = Math.max.apply(Math, this.form.value.questions[0].answers.map(function (o) { return o.value; }))
    let minData = Math.min.apply(Math, this.form.value.questions[0].answers.map(function (o) { return o.value; }))
    console.log(MaxData, minData)
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  saveQuestionaire() {
    // if (this.form.invalid) {
    //   return;
    // }
    // console.log(this.form.value);
    let data = {
      questionnaire_id: this.form.value.questionnaire_id,
      title: this.form.value.title,
      description: this.form.value.description,
      questions: this.form.value.questions,
    }

    console.log('datadatadatadatadata', data);
    this.api.post("editQuestionnaire", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.router.navigate(['matching-portfolio/' + this.form.value.questionnaire_id])
      } else {
        this.commonService.err(result.message)
      }
    }, error => {
      console.log({ error })
    })

  }

}
