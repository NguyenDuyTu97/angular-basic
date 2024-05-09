import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appResizable2]' // Attribute selector
})

export class ResizableDirective2 implements OnInit {


  @Input() resizableGrabWidth = 8;
  @Input() resizableMinWidth = 10;


  div1With = 0;

  dragging = false;

  constructor(private el: ElementRef) {
    this.div1With = this.el.nativeElement.clientWidth;

    console.log(this.div1With,"this.div1With 11223")
    

    const self = this;

    const EventListenerMode = { capture: true };

    function preventGlobalMouseEvents() {
      document.body.style['pointer-events'] = 'none';
    }

    function restoreGlobalMouseEvents() {
      document.body.style['pointer-events'] = 'auto';
    }


    const newWidth = (wid) => {
      const newWidth = Math.max(this.resizableMinWidth, wid);
      el.nativeElement.style.width = (newWidth) + "px";
    }


    const mouseMoveG = (evt) => {
        // console.log("mouseMoveG 444")

        // console.log(evt, "evt mouseMoveG")

      if (!this.dragging) {
        return;
      }
      newWidth(evt.clientX - el.nativeElement.offsetLeft)
      evt.stopPropagation();
    };

    // const dragMoveG = (evt) => {
    //   if (!this.dragging) {
    //     return;
    //   }
    //   const newWidth = Math.max(this.resizableMinWidth, (evt.clientX - el.nativeElement.offsetLeft)) + "px";
    //   el.nativeElement.style.width = (evt.clientX - el.nativeElement.offsetLeft) + "px";
    //   evt.stopPropagation();
    // };

    const mouseUpG = (evt) => {

        console.log(this.el.nativeElement.clientWidth,"this.el.nativeElement.clientWidth mouseUpG")
        console.log("mouseUpG 333")

        console.log(evt, "evt mouseUpG")


      if (!this.dragging) {
        return;
      }
      restoreGlobalMouseEvents();
      this.dragging = false;
      evt.stopPropagation();
    };

    const mouseDown = (evt) => {
      if (this.inDragRegion(evt)) {

        console.log("mouseDown if 11")
       

        this.dragging = true;
        preventGlobalMouseEvents();
        evt.stopPropagation();
      }

      console.log("mouseDown else 22")
    };


    const mouseMove = (evt) => {
      if (this.inDragRegion(evt) || this.dragging) {
        console.log("mouseMove if")

        el.nativeElement.style.cursor = "col-resize";
      } else {
        console.log("mouseMove else")

        el.nativeElement.style.cursor = "default";
      }
    }


    document.addEventListener('mousemove', mouseMoveG, true);
    document.addEventListener('mouseup', mouseUpG, true);
    el.nativeElement.addEventListener('mousedown', mouseDown, true);
    el.nativeElement.addEventListener('mousemove', mouseMove, true);
  }

  ngOnInit(): void {
    this.el.nativeElement.style["border-right"] = this.resizableGrabWidth + "px solid darkgrey";
  }

  inDragRegion(evt) {

    console.log(this.el.nativeElement.clientWidth,"this.el.nativeElement.clientWidth 11")
    console.log(evt, "evt 5555555555")

    return this.el.nativeElement.clientWidth - evt.clientX + this.el.nativeElement.offsetLeft < this.resizableGrabWidth;
  }

}