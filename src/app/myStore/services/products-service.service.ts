import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Products} from '../interfaces/products';



@Injectable({
  providedIn: 'root'
})
export class ProductsService
{
  //CLASS PROPERTIES
  private products: Products[] = [
    {
      id: '1',
      price: 199,
      name: 'PlayStation Vita Slim',
      image: 'https://4.bp.blogspot.com/-tJX1yBJFs7U/VGojSDsmfAI/AAAAAAAAXBo/H3AFaRK0LNg/s1600/4948872413947-02.jpg',
      description: `Lightly used PlayStation Vita Slim in excellent condition. The OLED screen provides stunning
      visuals with no scratches or dead pixels. The console has been well taken care of, showing only minimal
      signs of use. Includes the original charger and a protective case. Perfect for gaming on the go, whether
      you're a fan of RPGs, action games, or indie hits.`
      ,
      time: '2025-01-18',
      published: true,
    },
    {
      id: '2',
      price: 349,
      name: 'Nintendo Switch OLED',
      image: 'https://www.nme.com/wp-content/uploads/2021/11/Nintendo-Switch-OLED-featured-2000x1270-1-1392x884.jpg',
      description: `Used Nintendo Switch OLED in fantastic condition. The vibrant OLED screen is free of scratches
      and delivers a stunning gaming experience. Joy-cons are fully functional with no drift issues.
      This console has been gently used and comes with the original box, dock, and power adapter.
      Perfect for both handheld and docked gaming sessions.`,
      time: '2025-01-15',
      published: true,
    },
    {
      id: '3',
      price: 299,
      name: 'PSP Go',
      image: 'https://i.ytimg.com/vi/QzQ6QuB1xEY/maxresdefault.jpg',
      description: `Pre-owned PSP Go with minimal wear and tear. The sleek and compact design makes it an ideal choice
      for portable gaming. The console is fully operational, with buttons and screen in great condition.
      Includes the original charger and a protective pouch. A perfect addition to any gaming collection,
      especially for fans of classic PlayStation titles.`,
      time: '2025-01-10',
      published: false,
    },
    {
      id: '4',
      price: 599,
      name: 'Lenovo Legion Go',
      image: 'https://assetsio.reedpopcdn.com/Lenovo-Legion-Go-review-header.jpg?width=1920&height=1920&fit=bounds&quality=80&format=jpg&auto=webp',
      description: `Lenovo Legion Go in like-new condition, barely used and meticulously maintained. This handheld
      gaming PC is a powerhouse, capable of running demanding games with ease. It comes with all original accessories,
      including detachable controllers and packaging. Whether you're gaming at home or on the move,
      this device offers an exceptional experience.`,
      time: '2025-01-12',
      published: true,
    },
    {
      id: '5',
      price: 399,
      name: 'Steam Deck',
      image: 'https://s.yimg.com/ny/api/res/1.2/AJuaHSjM6GjIS2vLLdGBFg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MA--/https://s.yimg.com/os/creatr-uploaded-images/2022-02/f0a6e3c2-95ae-11ec-b7fe-a90003311d14',
      description: `Steam Deck in great condition, with only minor scuffs from light use.
      The device is fully functional and offers PC-grade performance for gaming on the go.
      Includes the original power adapter and a sturdy carrying case for added protection.
      Ideal for anyone looking to enjoy their Steam library or other PC games in a portable format.`,
      time: '2025-01-05',
      published: false,
    },
    {
      id: '6',
      price: 299,
      name: 'Nintendo 3DS XL',
      image: 'https://assets.newatlas.com/dims4/default/26a4a85/2147483647/strip/true/crop/4319x2879+271+0/resize/1200x800!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fnew-nintendo-3ds-xl-majoras-mask-80.jpg',
      description: `Well-maintained Nintendo 3DS XL, perfect for fans of handheld gaming.
      The device shows slight cosmetic wear but functions flawlessly.
      The screen is bright and responsive, and the hinges are firm. Includes a charger, stylus, and a few pre-installed
      classic games. A great choice for anyone looking to relive the nostalgia of Nintendo’s 3D gaming era.`
      ,
      time: '2025-01-08',
      published: false,
    },
  ];




  //CONSTRUCTOR
  constructor()
  {
    this.loadProducts();
  }



  //GETTERS & SETTERS (NA)



  //METHODS
  private loadProducts()
  {
    const storedProducts = localStorage.getItem('products');
    if(!storedProducts)
    {
      localStorage.setItem('products', JSON.stringify([this.products]));
    }
  }


  public getProducts(): Observable<Products[]>
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



  //LIFECYCLE HOOKS (NA)

}
