import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'admin-tooltip',
  templateUrl: './tooltip.html'
})
export class TooltipDialog{  
  text_data=null;
  tooltip: FormGroup;
  show=1;
  allthemes= [{value: 0, viewValue: 'Hide'},
    {value: 1, viewValue: 'Red'},
    {value: 2, viewValue: 'Blue'},
    {value: 3, viewValue: 'Grey'}]; 
  allPages = ['Home','Symptoms','Admin','Services','AboutUs'];
  elements = ['Title','Subtitle','TopBar','BottomBar'];
  addconfig(){
    console.log(this.tooltip.value);
  }
  constructor(public dialog: MatDialog) {
    this.tooltip = new FormGroup({
      theme: new FormControl(0),
      text: new FormControl(),
      page:new FormControl(),
      element:new FormControl()
    });
  }
}
