import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  emp:any[];

  constructor(private bb:Router) {
    localStorage.removeItem("currentuser");
   }

  ngOnInit() {
    
  }


    logoff()
    {


this.bb.navigate(['/home']);


    
  }

}
