import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatProgressSpinner, MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoadingDialogComponent} from './loading-dialog/loading-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import {MatButton} from '@angular/material/button';



@NgModule({
  declarations: [LoadingDialogComponent, MessageDialogComponent],
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatProgressSpinnerModule,
    MatButton,
  ]
})
export class SharedModule { }
