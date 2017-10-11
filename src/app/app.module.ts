import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Material
import { MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Http
import { HttpModule } from '@angular/http';


// Firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdInputModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
