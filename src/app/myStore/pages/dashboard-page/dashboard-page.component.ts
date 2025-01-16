import {Component, OnDestroy, OnInit} from '@angular/core';
import {Products} from '../../interfaces/products';
import {ProductsService} from '../../services/products-service.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'pages-dashboard-page',
  standalone: false,

  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent implements OnInit,OnDestroy
{
  //CLASS PROPERTIES
  products: Products[] = [];
  private productsSubscription: Subscription;



  //CONSTRUCTOR
  constructor(private productsService: ProductsService) {
    this.productsSubscription = new Subscription();
  }



  //METHODS
  ngOnInit(): void {
    this.productsSubscription = this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    // Limpiar la suscripción cuando el componente se destruya
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
