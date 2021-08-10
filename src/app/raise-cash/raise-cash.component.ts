import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-raise-cash',
  templateUrl: './raise-cash.component.html',
  styleUrls: ['./raise-cash.component.scss']
})
export class RaiseCashComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
    }
}
