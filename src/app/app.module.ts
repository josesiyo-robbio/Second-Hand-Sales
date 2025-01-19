import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import 'animate.css';

//MODULES
import { AppRoutingModule } from './app-routing.module';
import {SharedModule} from './shared/shared.module';



@NgModule({
  declarations: [AppComponent],
  imports:
  [
    AppRoutingModule,
    BrowserModule,
    SharedModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
