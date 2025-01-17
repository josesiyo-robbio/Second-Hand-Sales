import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatButton} from '@angular/material/button';
import {MatSidenav, MatSidenavContainer, MatSidenavModule} from '@angular/material/sidenav';
import {MatListItem, MatNavList} from '@angular/material/list';
import {MatToolbar} from '@angular/material/toolbar';
import { LoadingDialogComponent } from './shared/loading-dialog/loading-dialog.component';
import {SharedModule} from './shared/shared.module';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButton,
    MatSidenavContainer,
    MatNavList,
    MatListItem,
    MatSidenavModule,
    MatToolbar,
    SharedModule,


  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
