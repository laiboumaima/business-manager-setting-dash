import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createentity',
  templateUrl: './createentity.component.html',
  styleUrls: ['./createentity.component.scss']
})
export class CreateentityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClickSubmit(data) {
    alert("Entered  : " + data.name);
 }
}
