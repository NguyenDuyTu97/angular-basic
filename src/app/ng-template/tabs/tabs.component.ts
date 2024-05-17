import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
})
export class TabsComponent implements OnInit {

  @Input() tabs=[]

  constructor() { }

  ngOnInit() {
  }

}
