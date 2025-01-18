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
  public dialog :MatDialog = inject(MatDialog);
  private dialogRef: MatDialogRef<LoadingDialogComponent, any> | undefined;
  public ebayImage:string = `https://onlinedomain.com/wp-content/uploads/2012/09/Ebay-logo-old.jpg`;
  public facebookImage: string = `https://accs-market.com/images/fb_bg.png`;
  public fiveSmilesImage: string = `https://store-images.s-microsoft.com/image/apps.10068.13510798887606460.3abf38c0-bfd7-4dcd-a1a0-bb4c24f47c1c.e1d69e36-d6a2-4aac-a115-0e79a82cdd4b?mode=scale&q=90&h=300&w=300`;
  public instructions:string = 'Select the platform where you want to list your product';
  public instructionsTip : string =  `Choose the platform where you want to showcase your item to make
    it visible to potential buyers. You can select from several popular options to maximize your product's
    visibility.`;

  //CONSTRUCTOR
  constructor
  (
    private stateService: StateService,
    private router: Router,
  )
  {}


  //METHODS
  openDialog(productId: string)
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
          onOk: () => {
            console.log('hola');
            // Asegúrate de que la navegación esté dentro de la función
            this.router.navigate(['']);
          }
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
