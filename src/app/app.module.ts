import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { ToggleComponent } from './toggle/toggle.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { TabsComponent } from "./ng-template/tabs/tabs.component";
import { ResizeComponent } from './resize/resize.component';
import { ResizableDirective } from "./resize/resize.directive";
import { ResizableDirective2 } from "./resize/resize.directive2";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: ProductListComponent },
      {
        path: "products/:productId",
        component: ProductDetailComponent,
      },
      {
        path: "cart",
        component: CartComponent,
      },
      {
        path: "todo-list",
        component: TodoListComponent,
      },
      {
        path: "resize",
        component: ResizeComponent,
      },
    ]),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    // bao gồm các component của module
    AppComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailComponent,
    CartComponent,
    TodoListComponent,
    TodoItemComponent,
    ToggleComponent,
    NgTemplateComponent,
    TabsComponent,
    ResizeComponent,
    ResizableDirective,
    ResizableDirective2
  ],
  // providers:[], : bao gồm các service của module
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
