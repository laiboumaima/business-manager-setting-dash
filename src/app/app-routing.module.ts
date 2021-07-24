import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';
import { CreateentityComponent } from './createentity/createentity.component';
import { UpdateentityComponent } from './updateentity/updateentity.component';
import { TemplatesComponent } from './templates/templates.component';
const routes: Routes = [
  {path:"",component: FirstpageComponent,  data: {title: 'Dashboard'}},
  {path:"Entities",component: EntitiesComponent,  data: {title: 'Entities'}},

  {path:"Templates",component: TemplatesComponent,  data: {title: 'Templates'}},

  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
