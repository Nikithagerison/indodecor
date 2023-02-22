import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm=this.fb.group({
    email:['',[Validators.required,Validators.pattern('[a-zA-Z0-9@.]*')]],
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    password:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*')]]
  })
  constructor(private fb:FormBuilder,private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
  }
  register(){
    var email=this.registerForm.value.email
    var uname=this.registerForm.value.uname
    var password=this.registerForm.value.password
    if(this.registerForm.valid){
      //asynchronous
      this.api.register(email,uname,password)
      .subscribe((result:any)=>{
      alert(result.message)    
      this.router.navigateByUrl('app-login')  
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
