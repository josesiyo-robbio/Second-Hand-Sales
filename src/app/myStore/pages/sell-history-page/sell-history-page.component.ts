import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {HistoryProduct} from '../../interfaces/history-product';


@Component({
  selector: 'myStore-sell-history-page',
  templateUrl: './sell-history-page.component.html',
  standalone : false,
  styleUrls: ['./sell-history-page.component.css']
})
export class SellHistoryPageComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'price', 'date', 'status'];
  dataSource: MatTableDataSource<HistoryProduct>;
  pageSizeOptions: number[] = [5, 10, 25];  // Opciones predeterminadas
  paginatorPageSize: number = 5;  // Tamaño de página predeterminado

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Datos de ejemplo
    const products = [
      { id: '1', name: 'PS5', price: 499, date: '2025-01-01', status: 'Sold' },
      { id: '2', name: 'Xbox Series X', price: 499, date: '2025-01-02', status: 'Sold' },
      { id: '3', name: 'Nintendo Switch', price: 299, date: '2025-01-03', status: 'Sold' },
      { id: '4', name: 'PS Vita', price: 199, date: '2025-01-04', status: 'Sold' },
      { id: '5', name: 'Oculus Quest 2', price: 299, date: '2025-01-05', status: 'Sold' }
    ];

    // Asignar los productos a la fuente de datos
    this.dataSource = new MatTableDataSource(products);
  }

  ngAfterViewInit() {
    // Después de inicializar las vistas, se asignan el paginator y sort
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Ajustamos dinámicamente las opciones del paginator según la cantidad de productos
    this.adjustPaginator();
  }

  // Método para ajustar las opciones del paginator dinámicamente
  private adjustPaginator() {
    const numberOfItems = this.dataSource.data.length;

    // Si hay menos de 5 productos, cambiamos las opciones de tamaño de página
    if (numberOfItems < 5) {
      this.pageSizeOptions = [numberOfItems];  // Solo mostramos el tamaño correcto
      this.paginatorPageSize = numberOfItems;  // Ajustamos el tamaño de la página
    } else {
      this.pageSizeOptions = [5, 10, 25];  // Opciones predeterminadas cuando hay más de 5 productos
      this.paginatorPageSize = 5;  // Tamaño de página predeterminado
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
