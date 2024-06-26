import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import { ActivatedRoute } from "@angular/router";
import { CartService } from "../cart.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
})
export class ProductDetailComponent implements OnInit {
  product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.product = products[+params.get("productId")];
    });
  }

  addToCart(product) {
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }
}
