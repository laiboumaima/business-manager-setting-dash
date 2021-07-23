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


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
