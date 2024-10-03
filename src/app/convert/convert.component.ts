import { Component } from '@angular/core';
import { ConvertMeterFeetComponent } from '../convert-meter-feet/convert-meter-feet.component';

@Component({
  selector: 'app-convert',
  standalone: true,
  imports: [ConvertMeterFeetComponent],
  templateUrl: './convert.component.html',
  styleUrl: './convert.component.css'
})

export class ConvertComponent {
}

