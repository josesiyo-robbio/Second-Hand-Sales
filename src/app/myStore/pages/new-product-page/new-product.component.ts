import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Products} from '../../interfaces/products';
import {MessageDialogComponent} from '../../../shared/message-dialog/message-dialog.component';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoadingDialogComponent} from '../../../shared/loading-dialog/loading-dialog.component';
import {Router} from '@angular/router';



@Component({
  selector: 'myStore-new-product-page',
  standalone: false,

  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent
{
  //CLASS PROPERTIES
  productForm: FormGroup;
  private dialogRef: MatDialogRef<LoadingDialogComponent, any> | undefined;
  public dialog :MatDialog = inject(MatDialog);



  //CONSTRUCTOR
  constructor(private fb: FormBuilder, private router: Router,)
  {
    this.productForm = this.fb.group({
      name        :   ['', Validators.required],
      price       :   [0, [Validators.required, Validators.min(0)]],
      image       :   ['', Validators.required],
      description :   ['', Validators.required]
    });
  }



  //GETTERS & SETTERS (NA)



  //METHODS
  onSubmit(): void
  {
    if (this.productForm.invalid)
    {
      return;
    }

    const productContainer = JSON.parse(localStorage.getItem('products') || '[]');

    if (!Array.isArray(productContainer) || productContainer.length === 0)
    {
      console.error('El formato del localStorage no es válido.');
      return;
    }

    const products = productContainer[0];

    const newProduct: Products =
      {
        id          :   this.generateId(),
        name        :   this.productForm.value.name,
        price       :   this.productForm.value.price,
        image       :   this.productForm.value.image,
        description :   this.productForm.value.description,
        time        :   new Date().toLocaleDateString('en-CA'),
        published   :   false,
      };

    products.push(newProduct);

    localStorage.setItem('products', JSON.stringify(productContainer));

    this.productForm.reset();

    this.dialogRef = this.dialog.open(MessageDialogComponent,
      {
        data: {
          title: 'Success',
          message: 'The product has been created successfully',
          onOk: () => this.router.navigate(['']),
        },
      });
  }


  private generateId(): string
  {
    return crypto.randomUUID();
  }



  //LIFECYCLE HOOKS (NA)

}
