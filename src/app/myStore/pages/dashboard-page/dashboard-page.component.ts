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
  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(
      (data) => {
        if (data && Array.isArray(data)) {
          this.products = data;
          console.log('Productos cargados:', this.products);
        } else {
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


  ngOnDestroy(): void {
    // Limpiar la suscripción cuando el componente se destruya
    if (this.productsSubscription) {
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
        onOk: () => {
          console.log('Deletar producto');
          console.log('ID recibido:', productId);

          // Obtiene los productos del localStorage
          const products = JSON.parse(localStorage.getItem('products') || '[]')[0] || [];

          console.log('Productos antes de eliminar:', products);

          // Filtra los productos, excluyendo el que tenga el id que se desea eliminar
          const updatedProducts = products.filter((product: { id: string }) => product.id !== productId.toString());

          console.log('Productos después de eliminar:', updatedProducts);

          // Guarda el array actualizado en localStorage
          localStorage.setItem('products', JSON.stringify([updatedProducts]));
          window.location.reload();

        }
      },
    });

  }



}
