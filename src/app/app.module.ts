import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbSidebarModule,NbMenuModule,NbThemeModule, NbLayoutModule,NbButtonModule , NbUserModule, NbActionsModule, NbSearchModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { EntitiesComponent } from './entities/entities.component';
//ng material
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';

import { CreateentityComponent } from './createentity/createentity.component';
import { UpdateentityComponent } from './updateentity/updateentity.component';
import { FormsModule } from '@angular/forms';
import { TemplatesComponent } from './templates/templates.component';
import { UpdatetemplateComponent } from './updatetemplate/updatetemplate.component';
import { CreatetemplateComponent } from './createtemplate/createtemplate.component'; 
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstpageComponent,
    EntitiesComponent,
    CreateentityComponent,
    UpdateentityComponent,
    TemplatesComponent,
    UpdatetemplateComponent,
    CreatetemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NgbModule,
    NbUserModule,
    NbSearchModule,
    NbActionsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    //material
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    MatSortModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
