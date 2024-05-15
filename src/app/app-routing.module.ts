import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ResizeComponent } from './resize/resize.component';
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
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
  {
    path: "dependency-injection",
    component: DependencyInjectionComponent,
  },
  {
    path: "rxjs",
    component: RxjsComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  { path: "", component: ProductListComponent },
  { path: "**", component: PageNotFoundComponent }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
