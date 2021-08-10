import { Component, OnInit } from '@angular/core';
import { Api } from '../../api/api.service';

@Component({
  selector: 'app-free-stock',
  templateUrl: './free-stock.component.html',
  styleUrls: ['./free-stock.component.scss']
})
export class FreeStockComponent implements OnInit {
  referList: any = []
  constructor(
    private api: Api
  ) { }

  ngOnInit() {
    this.stockList()
  }

  stockList() {
    this.api.get('referList').subscribe(result => {
      if (result.status == 200) {
        this.referList = result.data
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }

}
