import { HelpComponent } from './help/help.component';
import { SettingComponent } from './setting/setting.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SetupdashComponent } from './setupdash/setupdash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './form/editor/editor.component';
import { FormComponent } from './form/form/form.component';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';

import { TemplatesComponent } from './templates/templates.component';
const routes: Routes = [
  {path:"",component: FirstpageComponent,  data: {title: 'Dashboard'}
},
{path:"usermanagement",component:UsermanagementComponent,data:{title:'User Management'}},
          {path:"Entities",component: EntitiesComponent,  data: {title: 'Entities'}},
          {path:"createtmplate", component: EditorComponent, data: {title: 'Create Template'}},

          {path:"Templates",component: TemplatesComponent,  data: {title: 'Templates'}},
            {path:"",component: SidebarComponent,outlet:"sidebar"},
            {path:"Setting",component: SettingComponent,  data: {title: 'Setting'}},
            {path:"help",component: HelpComponent,  data: {title: 'Help'}},



  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
