import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormBuilder, Validators} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {LoginService} from './../../../shared/services/login.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   loginform :FormGroup;

  constructor( private _FormBuilder:FormBuilder,
    private _ToastrService:ToastrService,
    private _LoginService:LoginService
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
      res=>{ console.log(res)},
      err=>{console.log(err)}
    )
     
    

  }



buildloginform()
  {
    this.loginform = this._FormBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    }

    )
  }
}