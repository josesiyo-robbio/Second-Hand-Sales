import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButton} from '@angular/material/button';
import {MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import {SharedModule} from './shared/shared.module';
import 'animate.css';



@NgModule({
  declarations: [AppComponent],
  imports:
  [
    AppRoutingModule,
    BrowserModule,
    MatButton,
    MatListItem,
    MatNavList,
    MatSidenavContainer,
    MatSidenavModule,
    MatToolbar,
    SharedModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
