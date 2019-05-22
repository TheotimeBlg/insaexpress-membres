import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { UploadphotosComponent } from './uploadphotos/uploadphotos.component';


import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbListModule } from '@nebular/theme';



import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { DefisComponent } from './defis/defis.component';
import { ValidatephotosComponent } from './validatephotos/validatephotos.component';
import { TeamPositionComponent } from './team-position/team-position.component';
import { RapportComponent } from './rapport/rapport.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UploadphotosComponent,
    DefisComponent,
    ValidatephotosComponent,
    TeamPositionComponent,
    RapportComponent,
    BackComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    NoopAnimationsModule,
    LeafletModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbCardModule,
    NbListModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

