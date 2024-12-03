import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-filho',
  imports: [],
  templateUrl: './two-way-filho.component.html',
  styleUrl: './two-way-filho.component.css'
})
export class TwoWayFilhoComponent {
  @Input()
  value = 0;

  @Output()
  valueChangeEvent = new EventEmitter<number>()

  inc(){
    this.value++
    this.valueChangeEvent.emit(this.value)
  }

  dec(){
    this.value--
    this.valueChangeEvent.emit(this.value)
  }
}
