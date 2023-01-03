import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SignupService } from './signup.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  ngOnInit(): void {
    sessionStorage.removeItem('id');
  }
/**
 *
 */
constructor(private signupService:SignupService, private router:Router) {
  
  
}

onSubmit(data:any){
  console.log(data);
// write api call to get data
this.signupService.getUser(data.username).subscribe((data)=>{
  console.log(data);

  if(data.length as number > 0){
    sessionStorage.setItem('id', "loggedIn");
    this.signupService.setLoggedIn(true);
    this.router.navigate(['dashboard']);
  }
  else{
    sessionStorage.removeItem('id');
    this.signupService.setLoggedIn(false);
    alert('login failed');
  }
});
// this.router.navigate(['dashboard']);
//sessionStorage.setItem('id', "loggedIn");

}
}
