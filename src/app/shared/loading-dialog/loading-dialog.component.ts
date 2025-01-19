import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';



@Component({
  selector      : 'app-loading-dialog',
  standalone    : false,
  templateUrl   : './loading-dialog.component.html',
  styleUrl      : './loading-dialog.component.css',

})
export class LoadingDialogComponent 
{
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) 
    {
      if (!data) 
      {
        console.error('No se pasaron datos al diálogo');
        this.data = { title: 'Error', message: 'No se proporcionaron datos.' }; 
      }
    }

}
