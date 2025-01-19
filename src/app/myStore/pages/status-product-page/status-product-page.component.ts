import {Component, inject, OnInit} from '@angular/core';
import {Products} from '../../interfaces/products';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoadingDialogComponent} from '../../../shared/loading-dialog/loading-dialog.component';
import {StateService} from '../../services/state.service';
import {Router} from '@angular/router';
import {timer} from 'rxjs';
import {MessageDialogComponent} from '../../../shared/message-dialog/message-dialog.component';

@Component({
  selector: 'app-status-product-page',
  standalone: false,

  templateUrl: './status-product-page.component.html',
  styleUrl: './status-product-page.component.css'
})
export class StatusProductPageComponent implements OnInit
{
  //CLASS PROPERTIES
  public  product   : Products | null = null;
  public  dialog    : MatDialog = inject(MatDialog);
  private dialogRef : MatDialogRef<LoadingDialogComponent, any> | undefined;



  //CONSTRUCTOR
  constructor
  (
    private stateService: StateService,
    private router: Router,
  )
  {}



  //GETTERS & SETTERS (NA)



  //METHODS
  public openDialog(productId: string)
  {

    const newState: boolean = true;
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.flat().find((p: { id: string; }) => p.id === productId);
    if (product) {
      product.published = newState;
      localStorage.setItem('products', JSON.stringify(products));
    }

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
        data: {
          title: 'Éxito',
          message: 'Tu producto ha sido publicado',
          onOk: () => { this.router.navigate(['']);}
        },
      });
    });
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
