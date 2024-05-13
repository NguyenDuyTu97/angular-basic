import { Injectable } from "@angular/core";

@Injectable()
export class CartExtService {
  calculateTotal(list): number {
    return list.reduce(
        (total, item) => item.product.price + total,
        0
      );
  }
 
}