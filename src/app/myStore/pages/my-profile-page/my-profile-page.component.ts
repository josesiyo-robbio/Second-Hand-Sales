import {Component, model} from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-my-profile-page',
  standalone: false,

  templateUrl: './my-profile-page.component.html',
  styleUrl: './my-profile-page.component.css'
})
export class MyProfilePageComponent
{
  selected = model<Date | null>(null);
  public avatarUrl: string = 'https://images.unsplash.com/photo-1525447153550-9b38670d8fcc?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

}
