import { Component, ElementRef, ViewChild } from "@angular/core";

import { products } from "../products";
import { ToggleComponent } from "../toggle/toggle.component";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {

  // static: true: khi ViewChild không nằm trong Directive nào (*ngIf, *ngFor, ...)
  @ViewChild('toggleComp',{static:false}) toggle: ToggleComponent
  @ViewChild('nameInput',{static:true}) nameInput: ElementRef<HTMLInputElement>

  products = products;

  user = {
    name: "Nguyen Van A",
    age: 23,
    address: "Ha Noi",
  };

  isChecked = false

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
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
