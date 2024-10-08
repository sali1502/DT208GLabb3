import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})


// Klass med array, konstruktor och metod för att växla bild vid knapptryck 
export class HomeComponent {
  images: string[] = [
    "images/autumnleaf.jpg",
    "images/rosehip.jpg"
  ];

  currentImageIndex: number = 0;
  welcomeImage: string;

  constructor() {
    this.welcomeImage = this.images[this.currentImageIndex];
  }

  changeImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.welcomeImage = this.images[this.currentImageIndex];
  }
}
