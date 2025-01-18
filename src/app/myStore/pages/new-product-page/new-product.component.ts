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
  productForm: FormGroup;
  private dialogRef: MatDialogRef<LoadingDialogComponent, any> | undefined;
  public dialog :MatDialog = inject(MatDialog);

  constructor(private fb: FormBuilder, private router: Router,) {
    // Crea el formulario con los campos necesarios
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0)]],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  // Método para manejar el envío del formulario
  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    // Obtenemos el array principal del localStorage
    const productContainer = JSON.parse(localStorage.getItem('products') || '[]');

    // Validamos que sea un array válido y contenga al menos un índice
    if (!Array.isArray(productContainer) || productContainer.length === 0) {
      console.error('El formato del localStorage no es válido.');
      return;
    }

    // Accedemos al array de productos en el índice 0
    const products = productContainer[0];

    // Creamos un nuevo producto con los valores del formulario
    const newProduct: Products = {
      id: this.generateId(), // Generamos un ID único basado en el array existente
      name: this.productForm.value.name,
      price: this.productForm.value.price,
      image: this.productForm.value.image,
      description: this.productForm.value.description,
      time: new Date().toLocaleDateString('en-CA'), // Formato 'YYYY-MM-DD'
      published: false,
    };

    // Agregamos el nuevo producto al array de productos
    products.push(newProduct);

    // Guardamos el array principal actualizado en el localStorage
    localStorage.setItem('products', JSON.stringify(productContainer));

    // Reiniciamos el formulario y mostramos el mensaje de éxito
    this.productForm.reset();
    // Reiniciamos el formulario y mostramos el mensaje de éxito
    this.productForm.reset();
    this.dialogRef = this.dialog.open(MessageDialogComponent, {
      data: {
        title: 'Éxito',
        message: 'Tu producto ha sido publicado',
        onOk: () => this.router.navigate(['']),
      },
    });

  }



  private generateId(): string {
    return crypto.randomUUID(); // Genera un identificador único universal (UUID)
  }
}
