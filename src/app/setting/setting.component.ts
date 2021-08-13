import { User } from './../model/user';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
  
 user  = new User()
 account : boolean  = true;
 company : boolean  = true;
 day:any

  constructor() {
    
   }

  ngOnInit(): void {
    this.user.fullname = " Oumaima Laib"
    this.user.gender  = "fem"
    this.user.birthday  =new Date(1999, 8, 22).toISOString().split('T')[0];
    this.user.username  = "oumaima123"
    this.user.email  = "o.lb@gmail.com"
   
     
  }
  EmailFormControl = new FormControl('', [
    Validators.email
]);
  fullnameFormControl = new FormControl('', [Validators.pattern('^[a-zA-Z \-\']+')
 
]);
  passFormControl = new FormControl('', [

]);
confirmFormControl = new FormControl('', [
   
    ]);
    currentFormControl = new FormControl('', [
      Validators.required,
      ]);
     hide =true;

}
