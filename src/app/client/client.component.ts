import { Component, OnInit } from '@angular/core';
declare var $;
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    $(document).on('click','.managedDropdown',function(){
      $(this).addClass('active')
      $('.managedDropdownShow').slideDown();
    });
    $(document).on('click','.managedDropdown.active',function(){
      $(this).removeClass('active')
      $('.managedDropdownShow').slideUp();
    });
  }

}
