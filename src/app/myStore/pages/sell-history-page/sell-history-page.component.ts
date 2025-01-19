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
export class SellHistoryPageComponent implements AfterViewInit
{
  //CLASS PROPERTIES
  public displayedColumns: string[] = ['id', 'name', 'price', 'date', 'status'];
  public dataSource: MatTableDataSource<HistoryProduct>;
  public pageSizeOptions: number[] = [5, 10, 25];
  public paginatorPageSize: number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  //CONSTRUCTOR
  constructor()
  {
    const products =
      [
        { id: '1', name: 'PS5', price: 499, date: '2025-01-01', status: 'Sold' },
        { id: '2', name: 'Xbox Series X', price: 499, date: '2025-01-02', status: 'Sold' },
        { id: '3', name: 'Nintendo Switch', price: 299, date: '2025-01-03', status: 'Sold' },
        { id: '4', name: 'PS Vita', price: 199, date: '2025-01-04', status: 'Sold' },
        { id: '5', name: 'Oculus Quest 2', price: 299, date: '2025-01-05', status: 'Sold' }
      ];

    this.dataSource = new MatTableDataSource(products);
  }



  //GETTERS & SETTERS NA



  //METHODS
  private adjustPaginator()
  {
    const numberOfItems = this.dataSource.data.length;

    if (numberOfItems < 5)
    {
      this.pageSizeOptions = [numberOfItems];
      this.paginatorPageSize = numberOfItems;
    }
    else
    {
      this.pageSizeOptions = [5, 10, 25];
      this.paginatorPageSize = 5;
    }
  }

  applyFilter(event: Event)
  {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator)
    {
      this.dataSource.paginator.firstPage();
    }
  }



  //LIFECYCLE HOOKS
  ngAfterViewInit()
  {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.adjustPaginator();
  }

}
