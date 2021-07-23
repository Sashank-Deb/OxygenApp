import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TooltipDialog } from './tooltip';

@Component({
  selector: 'admin',
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class admin {
  text_data=null;
  name = 'Angular ';i=0;
  show=0;
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(TooltipDialog);
    /*dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });*/
  }
}

