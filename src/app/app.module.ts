import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { DialogService } from 'src/shared/services/dialog.service';
import { StorageService } from 'src/shared/services/storage.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    DialogService,
    StorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
