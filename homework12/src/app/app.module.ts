import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DumpComponent } from './dump.component';
import { SmartComponent } from './smart.component';
import { IsVisibleDirective } from './is-visible.directive';
import { MakeBiggerDirective } from './make-bigger.directive';

@NgModule({
  declarations: [
    AppComponent,
    DumpComponent,
    SmartComponent,
    IsVisibleDirective,
    MakeBiggerDirective
  ],
  imports: [
    BrowserModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
