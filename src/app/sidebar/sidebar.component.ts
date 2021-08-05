import { Component, OnInit } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';
import { NbSidebarService } from '@nebular/theme';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }


  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }


  items: NbMenuItem[] = [
 
    {
      title: 'Dashboard',
      icon: 'home',
      url :"/"
      
    },
    {
      title: 'Entities',
      icon: 'book',
      url :"Entities"
    },
    {
      title: 'Templates',
      icon:  'file',
      url: 'Templates'
    },
    {
      title: 'Users management',
      icon: 'people',
      url: 'usermanagement'
    },
  ];

  items2: NbMenuItem[] = [
 
    {
      title: 'Settings',
      icon: 'settings',
      url:'Setting'
      
    },
    {
      title: 'Help',
      icon: 'question-mark-circle',
      url:'help'
    },
    
  ];
  
  items3: NbMenuItem[] = [
 
    {
      title: 'Logout',
      icon: 'log-out',
      
      
    }
   
    
  ];
}
