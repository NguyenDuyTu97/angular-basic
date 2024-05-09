import { Component, OnInit } from "@angular/core";
import { Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alert",
  templateUrl: "./product-alert.component.html",
  styleUrls: ["./product-alert.component.css"],
})
export class ProductAlertComponent implements OnInit {
  @Input() product1; // data được truyền từ parent component
  @Output() notify = new EventEmitter(); // tạo instance để gọi from child component to parent component

  constructor() {}

  ngOnInit() {}
}
