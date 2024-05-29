import {
  ChangeDetectorRef,
  Component,
  OnInit,
  QueryList,
  ViewChildren,
} from "@angular/core";
import {
  CdkDragDrop,
  CdkDropList,
  copyArrayItem,
  moveItemInArray,
} from "@angular/cdk/drag-drop";

@Component({
  selector: "app-drag-and-drop",
  templateUrl: "./drag-and-drop.component.html",
  styleUrls: ["./drag-and-drop.component.css"],
})
export class DragAndDropComponent implements OnInit {
  todo = [
    { name: "Line", filters: [] },
    { name: "Line kế hoạch", filters: [] },
  ];

  tableFields = [
    { title: "Thời gian", type: "DATE" },
    { title: "Cấp dữ liệu", type: "SELECT" },
    { title: "Tên chỉ tiêu", type: "STRING" },
  ];

  done = [
    // { name: 'Get to work', filters: ['Thời gian', 'Tên chỉ tiêu'] },
  ];

  // isDone=true;

  @ViewChildren(CdkDropList)
  private dlq: QueryList<CdkDropList>;

  public dls: CdkDropList[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {}

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      // di chuyển item trong cùng 1 container
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      // Chuyển đổi giữa các container
      const itemCopy = JSON.parse(
        JSON.stringify(event.previousContainer.data[event.previousIndex])
      ); // Tạo bản sao sâu
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Đảm bảo rằng bản sao được chèn vào mảng đích
      event.container.data[event.currentIndex] = itemCopy;
    }
  }

  dropFilter(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onRemove(item, index) {
    this.done = [...this.done].filter((d, i) => !(d == item && i == index));
  }

  onCopy(item, index) {
    const itemCopy = JSON.parse(JSON.stringify(item)); // Tạo bản sao sâu
    this.done.splice(index, 0, itemCopy);
  }

  // child item
  onRemoveChildItem(idx, childrenIdx) {
    if (idx >= 0) this.done[idx].filters.splice(childrenIdx, 1);
  }

  ngAfterViewChecked() {
    if (this.dlq) {
      // this.cdr.detectChanges();
      const ldls: CdkDropList[] = [];

      this.dlq.forEach((dl, index) => {
        if (index !== 0 && index !== 1 && index !== 2) ldls.push(dl);
      });

      this.dls = ldls;
      this.cdr.detectChanges(); // Chạy detectChanges sau khi cập nhật connectedTo
    }
  }

  onSave() {}
}
