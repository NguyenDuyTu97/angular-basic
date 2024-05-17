import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { MatButtonModule, MatCheckboxModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatPaginatorModule, MatTableModule } from "@angular/material";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from "./app.component";
import { CartComponent } from "./cart/cart.component";
import { DependencyInjectionComponent } from './dependency-injection/dependency-injection.component';
import { TabGroupComponent } from "./dependency-injection/tab-group/tab-group.component";
import { TabPanelComponent } from "./dependency-injection/tab-panel/tab-panel.component";
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { TabsComponent } from "./ng-template/tabs/tabs.component";
import { ProductAlertComponent } from "./product-alert/product-alert.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ResizeComponent } from './resize/resize.component';
import { ResizableDirective } from "./resize/resize.directive";
import { ResizableDirective2 } from "./resize/resize.directive2";
import { AddOrUpdateModalComponent } from './rxjs/add-or-update-modal/add-or-update-modal.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { TodoItemComponent } from './todo-list/todo-item/todo-item.component';
import { TodoListComponent } from "./todo-list/todo-list.component";
import { ToggleComponent } from './toggle/toggle.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { DragDropTestComponent } from './drag-drop-test/drag-drop-test.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,

    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,

    MatTableModule,
    MatPaginatorModule,

    MatDialogModule,

    AppRoutingModule,

    DragDropModule,
    MatExpansionModule
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
    ResizableDirective2,
    DependencyInjectionComponent,
    SignInComponent,
    TabPanelComponent,
    TabGroupComponent,
    RxjsComponent,
    AddOrUpdateModalComponent,
    PageNotFoundComponent,
    DragAndDropComponent,
    DragDropTestComponent
  ],
  providers:[], ///: bao gồm các service của module
  bootstrap: [AppComponent],
  entryComponents: [AddOrUpdateModalComponent]
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
