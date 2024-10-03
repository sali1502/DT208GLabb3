import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-celsius-farenheit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './convert-celsius-farenheit.component.html',
  styleUrl: './convert-celsius-farenheit.component.css'
})
export class ConvertCelsiusFarenheitComponent {
  inputValue: number = 0; // Variabel för inputvärde
  selectedUnit: string = 'celsius'; // standardval för rullgardinsmeny
  result: string = ''; // Variabel för att lagra resultat

  // Funktion för att konvertera Celsius till Farenheit
  celsiusToFarenheit(celsius: number): number {
    return (celsius * 9 / 5) + 32;
  }

  // Funktion för att konvertera Farenheit till Celsius
  farenheitToCelsius(farenheit: number): number {
    return (farenheit - 32) * 5 / 9;
  }

  // Funktion för konvertering efter val av enhet
  convert(): void {
    let convertedValue: number;

    if (this.selectedUnit === 'celsius') {
      convertedValue = this.celsiusToFarenheit(this.inputValue);
      this.result = `${this.inputValue} °C är ${convertedValue.toFixed(2)} °F`;
    } else {
      convertedValue = this.farenheitToCelsius(this.inputValue);
      this.result = `${this.inputValue} °F är ${convertedValue.toFixed(2)} °C`;
    }
  }
}





