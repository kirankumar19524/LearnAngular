import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SignupService } from './login/signup.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivate {

  constructor(public router:Router, private serv: SignupService) { }

  canActivate(): boolean {

    //write logic to check the session or token
    if (sessionStorage.getItem('id') == null) {
      this.serv.setLoggedIn(false);
        this.router.navigate(['login']);
        return false;
    }
    this.serv.getAdmin;
    this.serv.setLoggedIn(true);
    return true;
}
}
