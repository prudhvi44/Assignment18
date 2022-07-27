import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { LoginService } from '../login.service';

import { User } from '../user';



@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {

  user: User = new User();

  users: any;
  number=1000;
  prudhvi:any;
  deleteMessage:any;
  mystatus: any;



  constructor(private loginService: LoginService) { }
  ngOnDestroy(): void {
   this.mystatus="Not OK";

    console.log("I am destroyer");

  }


  profileForm = new FormGroup({

    username: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),

  });
  get f(){
    return this.profileForm.controls
  }
  // Here we will develope the logic initialis the variable which are comming from forms
  submit() {

    console.log(this.profileForm.value)
   

    //Here logic will be there Develop your application can add logic here to call API Hit

    //this.getUserListData()
    this.user.username=this.f['username'].value;
    //console.log("aaaaaaaaaaa"+this.user.username)
    this.user.password=this.f['password'].value;
   this.postUser()
   

  }
  
  
  deleteUser(id: number) {
    this.ngOnDestroy();

    this.loginService.deleteUser(id)

      .subscribe(

        data => {

          console.log(data);

          this.deleteMessage=true;

          this.loginService.getUserList().subscribe(data =>{

            this.users =data

            })

        },

        error => console.log(error));

  }
  postUser() {                                   //Calls the REST API throgh the services

    this.loginService.createUser(this.user)

      .subscribe(data => console.log(data), error => console.log(error));

    this.user = new User();

  }



  // both the methods which are there is respected form must be defined here

  getAllUsers(){
     this.prudhvi="prudhvi";
     this.loginService.getUserList().subscribe((data:any) =>{
       this.users=data;

     })
     
  }
  get username():any{

    return this.profileForm.get('username');

  }
  get password():any{

    return this.profileForm.get('password');

  }

  ngOnInit(): void {
    this.mystatus="OK";
  }

   getUserListData(this: any) {

    console.log("Hi this is Prudhvi");

    this.loginService.getUserList().subscribe((data: any) => {

      console.log("Hi this is Krishna");

      this.users = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file.

      console.log(this.users);
      // this.dtTrigger.next();

    })



  }

}