import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-etfs',
  templateUrl: './etfs.component.html',
  styleUrls: ['./etfs.component.scss']
})
export class EtfsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).on('click','button.minus',function(){
      $(this).parents('.inputBox').find('.formControl').attr('value',0);
    });
  }

}
