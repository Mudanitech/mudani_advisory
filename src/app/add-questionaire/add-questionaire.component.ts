import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { from } from 'rxjs';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-questionaire',
  templateUrl: './add-questionaire.component.html',
  styleUrls: ['./add-questionaire.component.scss']
})
export class AddQuestionaireComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder,
    private api: Api,
    private commonService: CommonService,
    private router: Router, ) { }

  ngOnInit() {
    this.form = this.fb.group({
      "title": ['', Validators.required],
      'description': ['', Validators.required],
      'questions': this.fb.array([
        this.initQuestion()
      ])
    });
    console.log(this.form.value);
  }

  initQuestion() {
    return this.fb.group({
      'question': ['', Validators.required],
      'answers': this.fb.array([
        this.initAnswer()
      ])
    })
  }

  initAnswer() {
    return this.fb.group({
      'answer': ['', Validators.required],
      'value': ['', [Validators.required, Validators.pattern("^[0-9]*$")]]
    })
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

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  saveQuestionaire() {
    if (this.form.invalid) {
      this.commonService.err("All fields are required.")
      return;
    }
    console.log(this.form.value);
    let data = {
      title: this.form.value.title,
      description: this.form.value.description,
      questions: this.form.value.questions,
    }

    this.api.post("addQuestionnaire", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.router.navigate(['matching-portfolio/' + result.data._id])
      } else {
        this.commonService.err(result.message)
      }
    }, error => {
      console.log({ error })
    })

  }


}
