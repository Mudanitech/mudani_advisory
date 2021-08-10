import { getElement } from '@amcharts/amcharts4/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) { }
  summaryOverViewTab:any;
  clientTab:any;
  investingTab:any;
  transactionTab:any;

  ngOnInit() {

  }

summaryClick(){
  this.summaryOverViewTab=true;
  this.clientTab=false;
  this.investingTab=false;
  this.transactionTab=false;

  localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab)
  localStorage.setItem("clientTab", this.clientTab)
  localStorage.setItem("investingTab", this.investingTab)
  localStorage.setItem("transactionTab", this.transactionTab)


}

clientClick(){
  this.summaryOverViewTab=false;
  this.clientTab=true;
  this.investingTab=false;
  this.transactionTab=false;

  localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab)
  localStorage.setItem("clientTab", this.clientTab)
  localStorage.setItem("investingTab", this.investingTab)
  localStorage.setItem("transactionTab", this.transactionTab)
}

investingClick(){
  this.summaryOverViewTab=false;
  this.clientTab=false;
  this.investingTab=true;
  this.transactionTab=false;

  localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab)
  localStorage.setItem("clientTab", this.clientTab)
  localStorage.setItem("investingTab", this.investingTab)
  localStorage.setItem("transactionTab", this.transactionTab)
}

transactionClick(){
  this.summaryOverViewTab=false;
  this.clientTab=false;
  this.investingTab=false;
  this.transactionTab=true;

  localStorage.setItem("summaryOverViewTab", this.summaryOverViewTab)
  localStorage.setItem("clientTab", this.clientTab)
  localStorage.setItem("investingTab", this.investingTab)
  localStorage.setItem("transactionTab", this.transactionTab)
}

checkFun(){
  let x = localStorage.getItem("summaryOverViewTab");

  if( x == "false" ){
    document.getElementById('Summary-tab').innerHTML;
  }


  $(document).ready(function(){
    if (localStorage.which_tab) {
      $('#tab-'+localStorage.which_tab).slideToggle("slow").siblings('div').hide('slow');
      $('#tab-'+ localStorage.which_tab).slideToggle('slow');
    }
   $('a.tab-menu').click(function(){
       if ( $(window).width() < 768 ) 
      $('#tab-'+($('.tab-menu').index($(this))+1)).slideToggle("slow").siblings('div').hide('slow');
      var t = $(this).attr('data-type')
      localStorage.which_tab = t
   });
});
}
}
