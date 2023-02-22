import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private api:HttpClient) { }

  //to get all Designs from the server to display:
  getdesigns(){
    return this.api.get('http://localhost:3000/all-designs')
  }
  //view decor
  viewDesign(decorId:any){
    return this.api.get('http://localhost:3000/all-designs/'+decorId)
  }

  //login API
  login(uname:any,password:any){
    const body ={
      uname,
      password
    }
    return this.api.post('http://localhost:3000/login',body)
  }

//register API
register(email:any,uname:any,password:any){
  const body ={
    email,
    uname,
    password
  }
  return this.api.post('http://localhost:3000/register',body)
  }
}
