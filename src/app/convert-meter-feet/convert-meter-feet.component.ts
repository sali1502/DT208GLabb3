import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-convert-meter-feet',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './convert-meter-feet.component.html',
  styleUrl: './convert-meter-feet.component.css'
})

export class ConvertMeterFeetComponent {
  inputValue: number = 0; // Variabel för inputvärde
  selectedUnit: string = 'meter'; // Standardval för rullgardinsmeny
  result: string = ''; // Variabel för att lagra resultat

  // Funktion för att kontertera meter till fot
  meterToFeet(meters: number): number {
    const feetPerMeter = 3.28084;
    return meters * feetPerMeter;
  }

  // Funktion för att kontertera fot till meter
  feetToMeter(feet: number): number {
    const metersPerFoot = 0.3048;
    return feet * metersPerFoot;
  }

  // Hämta värden från inputfält och rullgardinsmeny
  convert(): void {
    let convertedValue: number;

    // Konvertera efter val av enhet
    if (this.selectedUnit === 'meter') {
      convertedValue = this.meterToFeet(this.inputValue);
      this.result = `${this.inputValue} meter är ${convertedValue.toFixed(2)} fot`;
    } else {
      convertedValue = this.feetToMeter(this.inputValue);
      this.result = `${this.inputValue} fot är ${convertedValue.toFixed(2)} meter`;

    }
  }
}
