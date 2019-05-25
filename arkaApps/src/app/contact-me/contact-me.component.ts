import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';

class MyData{
  constructor(
    public labelData: string = 'Your Data',
    public labelName: string = 'Username',
    public labelEmail: string = 'Email',
    public labelMessage: string = 'Message',
    public username: string = '',
    public email: string = '',
    public message: string = ''
  ) {}
}

@Component({
  selector: "app-contact-me",
  templateUrl: "./contact-me.component.html",
  styleUrls: ["./contact-me.component.css"]
})
export class ContactMeComponent implements OnInit {
  inputData: MyData[] = [];
  inputModel: MyData;
  submitType: string = "Save";

  form = new FormGroup({
    nama: new FormControl(""),
    email: new FormControl("", [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")
    ]),
    comment: new FormControl("")
  });

  get email() {
    return this.form.get("email");
  }

  // onSubmit() {
  //   console.log(this.form.value);
  // }

  onSave() {
    if (this.submitType === "Save") {
      this.inputData.push(this.inputModel);
    }
  }
  onNew() {
    this.inputModel = new MyData();
    this.submitType = "Save";
  }

  constructor() {}

  ngOnInit() {}
}
