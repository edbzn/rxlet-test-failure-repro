import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LetModule, PushModule } from '@rx-angular/template';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LetModule,
    PushModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
