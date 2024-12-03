import { Component } from '@angular/core';
import { FilhoComponent } from "../filho/filho.component";

@Component({
  selector: 'app-pai',
  imports: [FilhoComponent],
  templateUrl: './pai.component.html',
  styleUrl: './pai.component.css'
})
export class PaiComponent {
  products: string[] = [
    
  ];
  addToCart(newProduct:string){
    this.products.push(newProduct)
  }
}
