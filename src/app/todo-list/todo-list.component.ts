import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
})
export class TodoListComponent implements OnInit {
  list = [];
  showForm = false;
  checkoutForm = {};
  inputValue = "";

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: "",
    });
  }

  ngOnInit() {}

  onAdd() {
    this.showForm = true;
  }

  onSubmit(data) {
    console.warn("customer data", data);

    const { name, address } = data;
    this.list.push({ name, address });

    // close form
    this.showForm = false;

    // reset form
    this.checkoutForm = this.formBuilder.group({
      name: "",
      address: "",
    });
  }

  onKey(event: any) {
    // without type info
    this.inputValue += event.target.value + " | ";
  }
}
