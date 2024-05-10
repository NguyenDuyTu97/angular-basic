import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {
  usernamePattern = /^[a-z]{6,32}$/i;
  passwordPattern = /^(?=.*[!@#$%^&*]+)[a-z0-9!@#$%^&*]{6,32}$/;

  userInfo={
    username: "",
    password: "",
    rememberMe: null,
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form : Form){
    console.log(form,"form value");
  }

}
