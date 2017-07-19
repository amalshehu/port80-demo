import { AppService } from './app.service';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MdInputModule, MdButtonModule, MdCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';


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
    MdButtonModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
