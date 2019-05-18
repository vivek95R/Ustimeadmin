import { Component, OnInit } from '@angular/core';
import { login } from './Login';
import { Router } from '@angular/router';
import { LoginService } from './login.service'
import { FormGroup, Validators, FormControl, FormBuilder } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import {SharedServiceService} from 'src/SharedService/shared-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private readonly notifier: NotifierService;
  loginform: FormGroup;
  log: string;
  user: login = {
    User: '',
    Password: ''
  }

  submitted: boolean;
  Login() {
    
  


    
    this.submitted = true;
    if (this.loginform.valid) {
      
        this.loginService.login(this.user.User, this.user.Password).subscribe(data => {
          if (data) {
            //var log: string = "login";
            this.loginService.changeMessage("login");
            this.router.navigate(['/Index/']);
          }else{
            this.notifier.notify('error', 'Logged In Failed!' );
          }
        })
    }

  }
  constructor(private router: Router, 
              private loginService: LoginService, 
              private formBuilder: FormBuilder,
              private sharedService: SharedServiceService,
              notifierService: NotifierService) {
                this.notifier = notifierService;
                this.sharedService.comp1Val = "Component 1 initial value";
                this.sharedService.updateComp1Val('Vivek');
  }
  get f() { return this.loginform.controls; }
  ngOnInit() {
    this.loginService.currentMessage.subscribe(message => this.log = message);
    this.loginform = this.formBuilder.group({
      User: ['', Validators.required],
      pwd: ['', Validators.required]
    });
  }

}
