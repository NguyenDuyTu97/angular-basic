import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-or-update-modal',
  templateUrl: './add-or-update-modal.component.html',
  styleUrls: ['./add-or-update-modal.component.css']
})
export class AddOrUpdateModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddOrUpdateModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    console.log(this.dialogRef, "this dialog ref 1")
  }

  onSubmit(form){
    console.log(form, 'form submit')
    if(!form || !form.value.name) return;

    this.dialogRef.close({ data: form.value })
  }

  onCancel(){
    // e.preventDefault();
    this.dialogRef.close()
  }
}
