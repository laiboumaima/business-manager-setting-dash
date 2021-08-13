import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit {
  hide =true;
  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data) {
    alert("Entered  : " + data.name);
 }
}
