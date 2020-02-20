import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  serviceData: any;

  constructor(private router: Router) { }
  user = {
    email : "",
    password : ""
  }
  ngOnInit() {
  }
  onSubmit(user){
console.log(user);
if(user.email==1){
this.router.navigate(['samplel']);
}
else if(user.email==2){
  this.router.navigate(['sample2']);
  }
      }
      
   }

