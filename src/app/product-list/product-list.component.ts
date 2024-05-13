import { Component, ElementRef, ViewChild } from "@angular/core";

import { products } from "../products";
import { ToggleComponent } from "../toggle/toggle.component";
import { CartService } from '../cart.service';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {

  // static: true: khi ViewChild không nằm trong Directive nào (*ngIf, *ngFor, ...)
  @ViewChild('toggleComp',{static:false}) toggle: ToggleComponent
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef<HTMLInputElement>

  currentDate = new Date();
  products = products;
  isChecked = false

  user = {
    name: "Nguyen Van A",
    age: 23,
    address: "Ha Noi",
  };

  constructor(
    private cartService: CartService,
  ) {}

  share(name) {
    window.alert(`The product has been shared ${name}!`);
  }

  onNotify(value) {
    console.log(value, "value 0000");
    window.alert("You will be notified when the product goes on sale");
  }

  ngOnInit(){
    // this.nameInput.nativeElement.focus()
    console.log(this.nameInput, "this nameInput in ngOnInit")
  }

  ngAfterViewInit(){
    console.log(this.toggle, "this toggle in ngAfterViewInit")
  }

  onChangeCheckedT(checked){
    this.isChecked = checked
  }

  addToCart(product) {

    console.log(product, "product 1111")
    window.alert("Your product has been added to the cart!");
    this.cartService.addToCart(product);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
