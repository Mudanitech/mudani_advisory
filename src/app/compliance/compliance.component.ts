import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup, FormControl, Validators } from "@angular/forms";
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compliance',
  templateUrl: './compliance.component.html',
  styleUrls: ['./compliance.component.scss']
})
export class ComplianceComponent implements OnInit {
  form: FormGroup;
  billTime = 1;
  duration = "monthly"
  constructor(private fb: FormBuilder,
    private api: Api,
    private commonService: CommonService,
    private router: Router, ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      "type": ['', Validators.required],
      'name': ['', Validators.required],
      'price': ['', Validators.required],
      'duration': ['monthly', Validators.required],
      'bill_time': ['1', Validators.required],
      'description': ['', Validators.required],
    });
  }

  saveFees() {
    if (this.form.invalid) {
      this.commonService.err("All fields are required.")
      return;
    }
    //console.log(this.form.value);
    let data = {
      type: this.form.value.type,
      name: this.form.value.name,
      price: this.form.value.price,
      duration: this.form.value.duration,
      bill_time: this.form.value.bill_time,
      description: this.form.value.description
    }
    console.log(data);
    this.api.post("addPlan", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        this.router.navigate(['compliance'])
        this.form.reset();
      } else {
        this.commonService.err(result.message)
      }
    }, error => {
      console.log({ error })
    })

  }

  changeDuration(duration) {
    this.duration = duration;
    this.form.patchValue({
      duration: duration
    })
    console.log(this.form.value);
  }
  changeBillTime(billTime) {
    this.billTime = billTime;
    this.form.patchValue({
      bill_time: billTime
    })
    console.log(this.form.value);
  }

}
