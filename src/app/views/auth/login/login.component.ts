import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {LoginService} from './../../../shared/services/login.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform :FormGroup;

  constructor( private _FormBuilder:FormBuilder,
    private _ToastrService:ToastrService,
    private _LoginService:LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.buildloginform();
  }
  onSubmit()
  {
    /*if(this.loginform.invalid)
    {
      return;
    }*/
    this._LoginService.login(this.loginform.value).subscribe(
      (
        res:any)=>{
        if(res.success){
          localStorage.setItem("token",res.success.token);
          this.router.navigate(['/admin/posts']);
          console.log(res);
          console.log(localStorage.getItem("token"))
        }

      },
      err=>{console.log(err)}
    )
     
    

  }



buildloginform()
  {
    this.loginform = this._FormBuilder.group({
      email:['Test@test.com',Validators.required],
      password:['123456789',Validators.required]
    }

    )
  }
}