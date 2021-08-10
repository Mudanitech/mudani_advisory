import { Component, OnInit } from '@angular/core';
import * as ApexCharts from 'apexcharts';
@Component({
  selector: 'app-managed-account-detail',
  templateUrl: './managed-account-detail.component.html',
  styleUrls: ['./managed-account-detail.component.scss']
})
export class ManagedAccountDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var options = {
      series: [44, 55, 41, 17, 15],
      chart: {
      type: 'donut',
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
  }

}
