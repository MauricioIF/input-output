import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filho',
  imports: [],
  templateUrl: './filho.component.html',
  styleUrl: './filho.component.css'
})
export class FilhoComponent {
  @Output()
  addToCartEvent = new EventEmitter<string>()

  addToCart(product:string){
    this.addToCartEvent.emit(product)
  }
}
