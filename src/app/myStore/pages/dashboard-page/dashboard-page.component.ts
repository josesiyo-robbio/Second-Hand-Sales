import {Component, OnDestroy, OnInit} from '@angular/core';
import {Products} from '../../interfaces/products';
import {ProductsService} from '../../services/products-service.service';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {StateService} from '../../services/state.service';

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
  constructor(
    private productsService: ProductsService,
    private stateService: StateService,
    private router: Router)
  {
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


  toSellProduct(product : Products): void
  {
    this.stateService.setProducts(product);
    this.router.navigate(['/profile/sell-item']);
  }
}
