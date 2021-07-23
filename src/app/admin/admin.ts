import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class admin {
  text_data=null;
  name = 'Angular ';i=0;
  tooltip: FormGroup;
  show=0;
  
  allthemes = [
    {value: 0, viewValue: 'none'},
    {value: 1, viewValue: 'Red'},
    {value: 2, viewValue: 'Blue'},
    {value: 3, viewValue: 'Grey'}
  ]; 
  allPages = ['Home','Symptoms','Admin','Services','AboutUs'];
  elements = ['Title','Subtitle','TopBar','BottomBar'];
  constructor() {
    this.tooltip = new FormGroup({
      theme: new FormControl("", Validators.required),
      text: new FormControl("", Validators.required),
      page:new FormControl("", Validators.required),
      element:new FormControl("", Validators.required)
    });
  }
}
