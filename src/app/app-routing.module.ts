import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstpageComponent } from './firstpage/firstpage.component';

const routes: Routes = [
  {path:"",component: FirstpageComponent,  data: {title: 'Dashboard'}},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
