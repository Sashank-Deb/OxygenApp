import { Component, OnInit, VERSION } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-Symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: [ './symptoms.component.css' ]
})
export class Symptoms implements OnInit {
  theme="";
  nudgeid="";
  constructor(private http:HttpClient){}
ngOnInit(){
  this.fetchTheme();
  this.fetchElementId();
}
fetchTheme(){
  return this.http.get('https://oxygen-2021-default-rtdb.firebaseio.com/NudgeType/NudgeTheme.json').subscribe((response)=>{this.theme=JSON.stringify(response).substring(1, JSON.stringify(response).length -1);console.log(this.theme)}); 
}
fetchElementId(){
  return this.http.get('https://oxygen-2021-default-rtdb.firebaseio.com/NudgeType/ElementId.json').subscribe((response)=>{this.nudgeid=JSON.stringify(response).substring(1,2);console.log(this.nudgeid)}); 
}
}