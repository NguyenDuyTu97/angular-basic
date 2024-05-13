import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class PostService {
  items = [];
  constructor() {}

  checkMessageItems(){
    if(this.items.length == 0) return 'no items';

    return `have ${this.items.length} items`
  }
}
