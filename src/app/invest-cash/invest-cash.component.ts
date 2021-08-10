import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-invest-cash',
  templateUrl: './invest-cash.component.html',
  styleUrls: ['./invest-cash.component.scss']
})
export class InvestCashComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  backClicked() {
    // localStorage.setItem("fromInvesting","true")
    this.location.back()
    }
}
