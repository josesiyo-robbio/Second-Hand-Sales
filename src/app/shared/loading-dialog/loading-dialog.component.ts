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
  //CLASS PROPERTIES (NA)



  //CONSTRUCTOR
  constructor(@Inject(MAT_DIALOG_DATA) public data: any)
  {
    if (!data)
    {
      console.error('No data was passed to the dialogue');
      this.data = { title: 'Error', message: 'No data provided.' };
    }
  }



  //GETTERS & SETTERS (NA)
  //METHODS (NA)
  //LIFECYCLE HOOKS (NA)

}
