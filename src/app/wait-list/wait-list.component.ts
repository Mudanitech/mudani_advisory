import { Component, OnInit } from '@angular/core';
import { Api } from '../../api/api.service';

@Component({
  selector: 'app-wait-list',
  templateUrl: './wait-list.component.html',
  styleUrls: ['./wait-list.component.scss']
})
export class WaitListComponent implements OnInit {
  waitUsers: any = []
  constructor(
    private api: Api,
  ) { }

  ngOnInit() {
    this.waitList()
  }

  waitList() {
    this.api.get("waitList").subscribe(result => {
      if (result.status == 200) {
        this.waitUsers = result.data
      } else {
      }
    }, error => {
      console.log({ error })
    })
  }


}
