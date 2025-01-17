import {Component, inject, OnInit} from '@angular/core';
import {StateService} from '../../services/state.service';
import {Products} from '../../interfaces/products';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {LoadingDialogComponent} from '../../../shared/loading-dialog/loading-dialog.component';

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

  //CONSDTRUCTOR
  constructor
  (
    private stateService: StateService,
    private router: Router,
  )
  {}


  //METHODS
  openDialog()
  {
    this.dialog.open(LoadingDialogComponent, {
      disableClose: true, // Evita el cierre al hacer clic afuera o con la tecla Escape
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
