import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Products} from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  private products: Products[] = [
    {
      id: 1,
      price : 50,
      name : 'PS VITA SLIM',
      image: 'https://i5.walmartimages.com/seo/Used-Sony-PlayStation-Vita-Wifi-Handheld-System-White-PCH-1001_939c0b38-7dc9-4519-9a89-c2141b43499b.c185f43533a31a6777d9d508b145eb27.jpeg',
      description: 'Este es un producto increíble con todas las características que buscas.',
      time: 'Hace 10 minutos',
      published : true,
    },
    {
      id: 2,
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://via.placeholder.com/225',
      description: 'Otro producto que te encantará, de excelente calidad.',
      time: 'Hace 20 minutos',
      published : true,
    },
    {
      id: 3,
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://via.placeholder.com/225',
      description: 'Producto premium, con un rendimiento impresionante.',
      time: 'Hace 30 minutos',
      published : false,
    },
    {
      id: 4,
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://via.placeholder.com/225',
      description: 'Este producto tiene todo lo que necesitas para mejorar tu experiencia.',
      time: 'Hace 40 minutos',
      published : false,
    },
    {
      id: 5,
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://via.placeholder.com/225',
      description: 'Producto de alta tecnología, diseñado para durar.',
      time: 'Hace 50 minutos',
      published : false,
    },
    {
      id: 6,
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://via.placeholder.com/225',
      description: 'Producto de última generación, ideal para todo tipo de usuario.',
      time: 'Hace 1 hora',
      published : false,
    }
  ];


  //CONSTRUCTOR
  constructor()
  {
    this.loadProducts();
  }



  //METHODS
  loadProducts()
  {
    const storedProducts = localStorage.getItem('products');
    if(!storedProducts)
    {
      localStorage.setItem('products', JSON.stringify([this.products]));
    }
  }


  getProducts(): Observable<Products[]>
  {
    const storedProducts = localStorage.getItem('products');
      try
      {
        const parsedProducts = storedProducts ? JSON.parse(storedProducts) : [];
        return of(Array.isArray(parsedProducts[0]) ? parsedProducts[0] : parsedProducts);
      }
      catch (error)
      {
        console.error('Error al parsear los productos desde localStorage:', error);
        return of([]);
      }
    }
  }
