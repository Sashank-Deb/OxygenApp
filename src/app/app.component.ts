import { Component, OnInit, VERSION } from '@angular/core';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular ' + VERSION.major;
  public list: string[] = [];
  ngOnInit(){this.gen();}
  public gen() {
    console.log("UUID OF THE USER:"+uuid());
    this.list.push(uuid());
  }
}
