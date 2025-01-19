import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Products} from '../../interfaces/products';
import {ProductsService} from '../../services/products-service.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {StateService} from '../../services/state.service';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoadingDialogComponent} from '../../../shared/loading-dialog/loading-dialog.component';
import {MessageDialogComponent} from '../../../shared/message-dialog/message-dialog.component';

@Component({
  selector: 'pages-dashboard-page',
  standalone: false,

  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit,OnDestroy
{
  //CLASS PROPERTIES
  public dialog :MatDialog = inject(MatDialog);
  private dialogRef: MatDialogRef<LoadingDialogComponent, any> | undefined;
  products: Products[] = [];
  private productsSubscription: Subscription;



  //CONSTRUCTOR
  constructor(
    private productsService: ProductsService,
    private stateService: StateService,
    private router: Router)
  {
    this.productsSubscription = new Subscription();
  }



  //METHODS
  ngOnInit(): void 
  {
    this.productsSubscription = this.productsService.getProducts().subscribe(
      (data) => {
        if (data && Array.isArray(data)) 
        {
          this.products = data;
        } 
        else 
        {
          console.warn('No se encontraron productos válidos.');
          this.products = [];
        }
      },
      (error) => {
        console.error('Error al cargar productos:', error);
        this.products = [];
      }
    );
  }


  ngOnDestroy(): void 
  {
    if (this.productsSubscription) 
    {
      this.productsSubscription.unsubscribe();
    }
  }


  toSellProduct(product : Products): void
  {
    this.stateService.setProducts(product);
    this.router.navigate(['/profile/sell-item']);
  }


  deleteProductDialog(productId : string): void
  {
    this.dialog.open(MessageDialogComponent,
      {
      data: {
        title: 'Delete Product',
        message: 'Are you sure to delete the product?',
        onOk: () =>
        {
          const products = JSON.parse(localStorage.getItem('products') || '[]')[0] || [];
          const updatedProducts = products.filter((product: { id: string }) => product.id !== productId.toString());
          localStorage.setItem('products', JSON.stringify([updatedProducts]));
          window.location.reload();
        }
      },
    });
  }


  toStatusProduct(product: Products)
  {
    this.stateService.setProducts(product);
    this.router.navigate(['/profile/status-product']);
  }
}
