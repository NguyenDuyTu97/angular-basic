import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, copyArrayItem, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent implements OnInit {
  todo = [
    { name: 'Get to work', 
      filters: [
        {uuid: '1212',title:'Chi tieu'},
        {uuid: '1213',title:'Chi tieu 1'},
      ] 
    },
    { name: 'Pick up groceries', filters: [] },
    { name: 'Go home', filters: [] },
    { name: 'Fall asleep', filters: [] },
  ];

  tableFields = [
    'Thời gian',
    'Cấp dữ liệu',
    'Tên chỉ tiêu'
  ]

  done = [
    // { name: '', filters: [] }
  ];

  constructor() { }

  ngOnInit() {
  }
  
  drop(event: CdkDragDrop<string[]>) {

    console.log(event.previousContainer,"event.previousContainer 1")
    console.log(event.container,"event.container 1")

    if (event.previousContainer === event.container) { // di chuyển item trong cùng 1 container

      console.log("if 11111111")

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else { // di chuyển item sang container khác
      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  dropFilter(event: CdkDragDrop<string[]>) {
    console.log(event.previousContainer,"event.previousContainer.data");
    console.log(event.container,"event.container.data ")

    if (event.previousContainer === event.container) {
      console.log("the same container 1")

      // moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // console.log(event.previousContainer.data,"event.previousContainer.data");
      // console.log(event.container.data,"event.container.data ")

      console.log("else table fields")

      copyArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex)
    }
  }

  onRemove(item, index){
    this.done = [...this.done].filter((d, i)=> !(d==item && i==index))
  }

  onCopy(item, index){
    this.done.splice(index, 0, item);
  }
}
