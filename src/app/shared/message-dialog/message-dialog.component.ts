import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message-dialog',
  standalone: false,
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.css']
})
export class MessageDialogComponent
{
  //CLASS PROPERTIES (NA)



  //CONSTRUCTOR
  constructor
  (
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<MessageDialogComponent>
  )
  {
    if (!data)
    {
      console.error('No se pasaron datos al diálogo');
      this.data = { title: 'Error', message: 'No se proporcionaron datos.' };
    }
  }



  //GETTERS & SETTERS (NA)



  //METHODS
  public onConfirm()
  {
    if (this.data.onOk)
    {
      this.data.onOk();
    }
    this.dialogRef.close();
  }



//LIFECYCLE HOOKS (NA)

}
