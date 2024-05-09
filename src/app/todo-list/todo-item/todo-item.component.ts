import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"],
})
export class TodoItemComponent implements OnInit {
  name = 'typing me'; // state của class

  @Input() user;

  constructor() {}

  ngOnInit() {}
}
