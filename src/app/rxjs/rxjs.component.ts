import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../services/user.service';
import { AddOrUpdateModalComponent } from './add-or-update-modal/add-or-update-modal.component';
import { User } from 'src/constants/user';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css'],
})
export class RxjsComponent implements OnInit {
   // table
   displayedColumns: string[] = ['id', 'name', 'gender', 'createdAt', 'action'];

  // state
  users:User[] = [];
  editUserData: Partial<User> = {};
  formData= {
    name: "",
    gender: false 
  };

  isLoading: boolean = false;

  @ViewChild('openModalButton', { static: true }) openModalButton;

  constructor(
    public dialog: MatDialog,
    private userService : UserService
  ) { }

  onLoad(){
    this.isLoading = true;
    this.userService.getUsers().subscribe((data: []) => {
      this.users = data;
    },()=>{
      this.isLoading = false;
    },()=>{
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.onLoad();
  }

  openDialog(editData: User){
    let  userInit = {... this.formData}
    if(editData.id){
      this.editUserData = editData;
      userInit =  {...editData};
    }

    const buttonRect = this.openModalButton._elementRef.nativeElement.getBoundingClientRect();
    const dialogRef = this.dialog.open(AddOrUpdateModalComponent, {
      position: {
        top: `${buttonRect.bottom + window.scrollY}px`,
        left: `${buttonRect.left + window.scrollX}px`
      },
      width: '300px', // Adjust the width as needed
      data: { user: userInit }},
    );

    dialogRef.afterClosed().subscribe(res => {
      if(!res) return;

      if(!editData.id){
        this.onAdd(res.data);
      }
      else{
        this.onUpdate({...editData, ...res.data});
      }
    })
  }

  onUpdate(formValue){
    const userModel = {...formValue};
    
    this.userService.updateUser(userModel).subscribe({
      next: (val) => {
        if(val.id){
          alert("Update user successfully");
          this.onLoad();
        }
      },
      error: (err) => alert(err.statusText)
    })
  }

  onAdd(formValue){
    let id = 1;
    if(this.users.length > 0){
      id = +(this.users[this.users.length-1].id) + 1
    }

    const user = {
      id,
      avatar: 'avatar 1',
      createdAt: new Date(),
      ...formValue
    }
    this.userService.addUser(user).subscribe({
      next: (val) => {
        if(val.id){
          alert("Create user successfully");
          this.onLoad();
        }
      },
      error: (err) => alert(err.statusText)
    })
  }

  onDelete(id){
    this.userService.deleteUser(id).subscribe({
      next: (val) => {
        if(val.id){
          alert("Delete user successfully");
          this.onLoad();
        }
      },
      error: (err) => alert(err.statusText)
    })
  }
}
