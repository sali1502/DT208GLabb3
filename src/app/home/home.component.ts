import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  welcomeImage: string = "images/autumnleaf.jpg";

  changeImage(): void {
    this.welcomeImage = "images/rosehip.jpg";
  }
}
