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
      link :"/"
      
    },
    {
      title: 'Entities',
      icon: 'book',
      link :"Entities"
    },
    {
      title: 'Templates',
      icon:  'file',
      link: 'Templates'
    },
    {
      title: 'Users management',
      icon: 'people',
      link: 'usermanagement'
    },
  ];

  items2: NbMenuItem[] = [
 
    {
      title: 'Settings',
      icon: 'settings',
      link:'Setting'
      
    },
    {
      title: 'Help',
      icon: 'question-mark-circle',
      link:'help'
    },
    
  ];
  
  items3: NbMenuItem[] = [
 
    {
      title: 'Logout',
      icon: 'log-out',
      
      
    }
   
    
  ];
}
