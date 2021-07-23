import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }




  items: NbMenuItem[] = [
 
    {
      title: 'Dashboard',
      icon: 'home',
      
    },
    {
      title: 'Entities',
      icon: 'book',
    },
    {
      title: 'Templates',
      icon:  'file',
    },
    {
      title: 'Users management',
      icon: 'people',
    },
  ];

  items2: NbMenuItem[] = [
 
    {
      title: 'Settings',
      icon: 'settings',
      
    },
    {
      title: 'Help',
      icon: 'question-mark-circle',
    },
    
  ];
  
  items3: NbMenuItem[] = [
 
    {
      title: 'Logout',
      icon: 'log-out',
      
      
    }
   
    
  ];
}
