
import { LocaldataserviceService } from './../localdataservice.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor( private mys:LocaldataserviceService,private rr:Router){}

  ngOnInit() {}
  
  model:any={};
  c:number=0;
  emp=[];

 



  change()
  {
    let temp:boolean=false;
    this.emp=JSON.parse(localStorage.getItem("key"));

    for(let i=0; i<this.emp.length; i++)
    {
      if(this.emp[i].mail==this.model.name && this.emp[i].pass==this.model.pass)
      {
        temp=true;
        break;
      }
    }

    if(temp)
    {
        alert("login successfull");
        this.mys.setlog(true);
        localStorage.setItem("temp",JSON.stringify(this.model));
        this.rr.navigate(['/dashboard']);
    }
    else
    {
      alert("enter valid username and password");
    }
  }

}
