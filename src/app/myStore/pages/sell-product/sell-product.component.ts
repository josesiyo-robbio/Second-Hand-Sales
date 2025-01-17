import {Component, inject, OnInit} from '@angular/core';
import {StateService} from '../../services/state.service';
import {Products} from '../../interfaces/products';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoadingDialogComponent} from '../../../shared/loading-dialog/loading-dialog.component';
import {MessageDialogComponent} from '../../../shared/message-dialog/message-dialog.component';
import {timer} from 'rxjs';


@Component({
  selector: 'app-sell-product',
  standalone: false,

  templateUrl: './sell-product.component.html',
  styleUrl: './sell-product.component.css'
})
export class SellProductComponent implements OnInit
{
  //CLASS PROPERTIES
  public product : Products | null = null;
  public dialog = inject(MatDialog);
  private dialogRef: MatDialogRef<LoadingDialogComponent, any> | undefined;

  //CONSTRUCTOR
  constructor
  (
    private stateService: StateService,
    private router: Router,
  )
  {}


  //METHODS
  openDialog()
  {

    this.dialogRef = this.dialog.open(LoadingDialogComponent,
    {
      data: {
        title: 'Publicando producto',
      },
      disableClose: true,
    });

    timer(1000).subscribe(() => {
      if (this.dialogRef)
      {
        this.dialogRef.close();
      }
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialog.open(MessageDialogComponent, {
        data : {
          title: 'Exito',
          message : 'tu producto ha sido publicado',
        },
      })
    })
  }





  //LIFECYCLE HOOKS
  ngOnInit(): void
  {
    this.product = this.stateService.getProduct();
    if(!this.product)
    {
      this.router.navigate(['']);
    }
    console.log(this.stateService.getProduct());
  }


}
