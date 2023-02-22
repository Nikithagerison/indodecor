import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    var uname=this.loginForm.value.uname
    var password=this.loginForm.value.password
    if(this.loginForm.valid){
      //asynchronous
      this.api.login(uname,password)
      .subscribe((result:any)=>{
      alert(result.message)  
      this.router.navigateByUrl('view-plans')
      },
       //error case
       (result:any)=>{
        alert(result.error.message)      
       }
      )
     
  
    }
    else{
      alert('invalid form');
      
    }
  
    }

}
