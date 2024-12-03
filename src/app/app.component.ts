import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { InputPaiComponent } from "./input/input-pai/input-pai.component";
import { TwoWayPaiComponent } from "./two-way/two-way-pai/two-way-pai.component";

@Component({
  selector: 'app-root',
  imports: [FormsModule, InputPaiComponent, TwoWayPaiComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:true
})
export class AppComponent {
  title = 'inputOutput';
}
