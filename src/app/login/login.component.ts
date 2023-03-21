import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  formdata:any;
  id="";
  result:any;

  constructor(private api:ApiService, private router:Router){}

  ngOnInit(): void {
    this.load()
  }
  load(){
    // this.id ="";
    // this.api.get("login").subscribe((result:any)=>{
    //   console.log(result);
      
    //   this.result = result.data;
    // })
    this.formdata= new FormGroup({
      username:new FormControl("",Validators.compose([Validators.required])),
      password:new FormControl("",Validators.compose([Validators.required]))
    })
  };



  submit(data:any){
    alert("ffg")
    this.api.post("login",data).subscribe((result:any)=>{
      console.log(result);
      if(result.success == "success"){
        this.router.navigate(['/admin/dashboard'])
      }
      
  })
  }
  

}
