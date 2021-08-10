import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Api } from '../../api/api.service';
import { CommonService } from '../../api/comman.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginSubmitCheck: Boolean = false
  type = 'password'
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private api: Api,
    private commonService: CommonService,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  showPassword() {
    this.type = this.type == 'password' ? 'text' : 'password'
  }

  login() {
    this.loginSubmitCheck = true
    if (this.loginForm.invalid) {
      return
    }
    let data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }
    this.api.post("adminLogin", data).subscribe(result => {
      if (result.status == 200) {
        this.commonService.succ(result.message)
        localStorage.setItem("mudanitoken", result.data.jwtToken)
        this.router.navigate(['summary'])
      } else {
        this.commonService.succ('Something went wrong')
      }
    }, error => {
      console.log({ error })
    })
  }

}
