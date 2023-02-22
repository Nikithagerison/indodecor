import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  designs:any
  constructor(private apiService:ApiserviceService) { }

  ngOnInit(): void {
    this.apiService.getdesigns()
    .subscribe((result:any)=>{
      this.designs=result.products
      console.log(this.designs);
      
    })
  }

}
