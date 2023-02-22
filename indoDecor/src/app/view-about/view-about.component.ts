import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-view-about',
  templateUrl: './view-about.component.html',
  styleUrls: ['./view-about.component.css']
})
export class ViewAboutComponent implements OnInit {
  designid:any
  designParticular:any
  constructor(private api:ApiserviceService,private activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    //get id
    this.activatedroute.params.subscribe((data)=>{
    this.designid=data['id']
    console.log(this.designid);
    //api call 
    this.api.viewDesign(this.designid)
    .subscribe((result)=>{
      this.designParticular=result
      console.log(this.designParticular);
      
    })
   })
  }

}
