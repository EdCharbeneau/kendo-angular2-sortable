import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SortableModule } from '@progress/kendo-angular-sortable';
import { ContactComponent } from './contact/contact.component';
		
@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SortableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
