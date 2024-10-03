import { Component } from '@angular/core';
import { ConvertMeterFeetComponent } from '../convert-meter-feet/convert-meter-feet.component';
import { ConvertCelsiusFarenheitComponent } from "../convert-celsius-farenheit/convert-celsius-farenheit.component";

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [ConvertMeterFeetComponent, ConvertCelsiusFarenheitComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})

export class ConvertComponent {
}

