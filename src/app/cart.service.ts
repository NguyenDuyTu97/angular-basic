import { Injectable } from "@angular/core";
import { CartExtService } from "./services/cart-extend.service";

@Injectable({
  providedIn: "root",
  // useClass: CartExtService,
})
export class CartService {
  items = [];
  constructor() {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
