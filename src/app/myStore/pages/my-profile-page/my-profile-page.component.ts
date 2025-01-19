import {Component, model, ModelSignal} from '@angular/core';



@Component({
  selector: 'app-my-profile-page',
  standalone: false,

  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.css'
})
export class MyProfilePageComponent
{
  //CLASS PROPERTIES
  selected                : ModelSignal<Date | null> = model<Date | null>(null);
  public avatarUrl        : string = 'https://images.unsplash.com/photo-1525447153550-9b38670d8fcc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  public shopDescription  : string = `Welcome to our second-hand console store, where gaming enthusiasts can find a wide
    selection of consoles at affordable prices. Whether you're looking for classic retro systems to relive the nostalgia
    or modern consoles to enjoy the latest games, we’ve got you covered. Every console is carefully tested and
    refurbished to ensure the best performance, giving you quality you can trust. Explore our collection
    and discover the perfect addition to your gaming setup while saving money and contributing to a more sustainable future.`;

  public profileDescription : string = `My name is Sophia Bloom, and I’m the owner of this store. As a lifelong gamer,
    I’ve always loved the magic of video games and the memories they create. That’s why I started this store to give
    consoles a second life and help others rediscover their favorite gaming moments without breaking the bank.`;

  public onTimeDelivery : string =  'On-time deliveries ';
  public positiveReviews : string = 'Positive reviews';



  //CONSTRUCTOR (NA)
  //GETTERS & SETTERS (NA)
  //METHODS (NA)
  //LIFECYCLE HOOKS (NA)

}
