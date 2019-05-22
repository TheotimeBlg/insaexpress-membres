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
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbListModule } from '@nebular/theme';

<<<<<<< HEAD
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

=======
>>>>>>> 042591dcce24fa21c2f3e343414aa8b6a9c6a3ce
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import { DefisComponent } from './defis/defis.component';
import { ValidatephotosComponent } from './validatephotos/validatephotos.component';

import { KeycloakHttp, keycloakHttpFactory } from './keycloak/keycloak.http';
import { KeycloakService } from './keycloak/keycloak.service';
import {HttpModule, RequestOptions, XHRBackend} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    UploadphotosComponent,
    DefisComponent,
    ValidatephotosComponent
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
    NbListModule,
    NgbModule
  ],
  providers: [
    HttpClientModule,
    {
      provide: KeycloakHttp,
      useFactory: keycloakHttpFactory,
      deps: [XHRBackend, RequestOptions, KeycloakService]
    },
    KeycloakService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
