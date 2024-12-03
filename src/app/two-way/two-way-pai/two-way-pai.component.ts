import { Component } from '@angular/core';
import { TwoWayFilhoComponent } from "../two-way-filho/two-way-filho.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-pai',
  imports: [TwoWayFilhoComponent, FormsModule],
  templateUrl: './two-way-pai.component.html',
  styleUrl: './two-way-pai.component.css'
})
export class TwoWayPaiComponent {
  value = 0
}
