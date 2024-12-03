import { Component } from '@angular/core';
import { InputFilhoComponent } from "../input-filho/input-filho.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-pai',
  imports: [InputFilhoComponent, FormsModule],
  templateUrl: './input-pai.component.html',
  styleUrl: './input-pai.component.css',
  standalone: true
})
export class InputPaiComponent {
   name: string = ''
}
