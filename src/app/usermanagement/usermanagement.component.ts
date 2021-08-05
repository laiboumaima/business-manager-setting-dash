import { AdduserComponent } from './adduser/adduser.component';
import { User } from '../model/user';

import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';



//***************************** */
const Users: Array<User> = [
  {id:1, fullname: 'user1',username:'user1',gender:'male',birthday:new Date(1999, 8, 22)  ,email:"effd@esi-sba.dz",password:"lol"},
  {id:2, fullname: 'user2',username:'user1',gender:'male',birthday:new Date(2000, 8, 22)  ,email:"effd@esi-sba.dz",password:"lol"},
  {id:3, fullname: 'user3',username:'user1',gender:'male',birthday:new Date(1996, 5, 2)  ,email:"effd@esi-sba.dz",password:"lol"},
];
/************ */
@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit {
  dataSource = new MatTableDataSource<User>(Users);
  constructor(private dialog : MatDialog) { }
  displayedColumns: String[] =['username','fullname','email','action'];
  @ViewChild(MatSort) sort :MatSort;
  @ViewChild(MatPaginator) paginator :  MatPaginator;
  searchKey :string;
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  onSearchClean(){
    this.searchKey=""
    this.applyFilter()
  }
  applyFilter(){
    this.dataSource.filter=this.searchKey.trim().toLowerCase()
  }
  
  onCreate(){
    const dialogCong =new MatDialogConfig()
    dialogCong.disableClose = false;
    dialogCong.autoFocus=true;
    dialogCong.width="60%"
    this.dialog.open(AdduserComponent,dialogCong)
    
  }

}
