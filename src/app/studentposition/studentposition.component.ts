
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentposition',
  templateUrl: './studentposition.component.html',
  styleUrls: ['./studentposition.component.css']
})
export class StudentpositionComponent implements OnInit {

  title="student list";

  constructor() { }
  temp:any[]=[];
   srch:string='all';
  ngOnInit()
  {
    this.temp=JSON.parse(localStorage.getItem("key")); 
    
    for(let i=0;i<this.temp.length;i++)
    {
      for(let j=i+1;j<this.temp.length;j++)
    {
      if(this.temp[i].percent<this.temp[j].percent)
      {
         let z=this.temp[i];
         this.temp[i]=this.temp[j];
         this.temp[j]=z;
      }
    }
   }
  }
}
