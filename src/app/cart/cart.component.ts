import { Component, OnInit } from "@angular/core";
import { CartService } from "../cart.service";
import { FormBuilder } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm = {};
  inputEnable = true;
  isWarning = false;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: "",
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();

    // API Call
    let headers = new HttpHeaders({
      "x-rapidapi-host": "random-facts2.p.rapidapi.com",
      "x-rapidapi-key": "your-api-key",
    });
    this.http
      .get<any>("https://jsonplaceholder.typicode.com/todos", {
        headers: headers,
      })
      .subscribe((data) => {
        // console.log(data);
      });
  }

  logInputValue(value: string) {
    console.log(value);

    this.inputEnable = !this.inputEnable;
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn("customer data", customerData);
  }
}