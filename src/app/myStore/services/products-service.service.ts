import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Products} from '../interfaces/products';


@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  private products: Products[] = 
  [
    {
      id          :   '1',
      price       :   50,
      name        :   'PS VITA SLIM',
      image       :   'https://img1.kakaku.k-img.com/images/maga/icv/sp828/3056/woman_rev449_img01_l.jpg',
      description :   'Este es un producto increíble con todas las características que buscas.',
      time        :   '10 Minutes Ago',
      published   :   false,
    },
    {
      id: '2',
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://www.nintendojo.com/wp-content/uploads/2021/10/Nintendo-Switch-OLED-Model-01.png',
      description: 'Otro producto que te encantará, de excelente calidad.',
      time: '10 Minutes Ago',
      published : true,
    },
    {
      id: '3',
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://3.bp.blogspot.com/-zZ_swsL_4_8/TbZZxOkWn3I/AAAAAAAAAEI/FG1Fxtx3JP8/s1600/White_PSP_Go.jpg',
      description: 'Producto premium, con un rendimiento impresionante.',
      time: '10 Minutes Ago',
      published : false,
    },
    {
      id: '4',
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://fs.npstatic.com/userfiles/7446224/image/lenovo-legion-go/nextpit-lenovo-legion-go-test-wasd-control-cr3-w450.jpg',
      description: 'Este producto tiene todo lo que necesitas para mejorar tu experiencia.',
      time: '10 Minutes Ago',
      published : false,
    },
    {
      id: '5',
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://cdn-products.eneba.com/resized-products/PXcS9tZEFRDWxJWHZw6Iw1Tm0ZIfv8vMmCVBUhkMRRA_350x200_1x-0',
      description: 'Producto de alta tecnología, diseñado para durar.',
      time: '10 Minutes Ago',
      published : false,
    },
    {
      id: '6',
      price : 250,
      name : 'Nintendo Switch Oled',
      image: 'https://www.gamespot.com/a/uploads/screen_kubrick/1823/18237460/4218493-unboxing_steamdeckoled_site.jpg',
      description: 'Producto de última generación, ideal para todo tipo de usuario.',
      time: '10 Minutes Ago',
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
