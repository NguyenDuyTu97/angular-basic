import { Component, TemplateRef, ViewChild, Input, OnInit, Output, EventEmitter  } from "@angular/core";
import { TabGroupComponent } from "../tab-group/tab-group.component";

@Component({
  selector: "app-tab-panel",
  templateUrl: "./tab-panel.component.html",
  styleUrls: ['./tab-panel.component.css']
})

export class TabPanelComponent implements OnInit {

    /**
     * Normal code
      @Input() title: string = '';
      @Input() index: number;
      @Input() activeIndex: number;
      @Output() isActiveChange = new EventEmitter<number>()
    */ 

    @Input() title: string;
    @ViewChild(TemplateRef, { static: true }) panelBody: TemplateRef<unknown>;
    constructor(private tabGroup: TabGroupComponent) {}

    ngOnInit() {
      this.tabGroup.addTabPanel(this);
    }
    ngOnDestroy() {
      this.tabGroup.removeTabPanel(this);
  }
}