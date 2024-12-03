import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-filho',
  imports: [FormsModule],
  templateUrl: './input-filho.component.html',
  styleUrls: ['./input-filho.component.css'],
  standalone: true
})
export class InputFilhoComponent {
  @Input() name: string = '';
}
