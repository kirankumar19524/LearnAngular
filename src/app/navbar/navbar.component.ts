import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { SignupService, User } from '../login/signup.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  userName$: Observable<User>;
  /**
   *
   */
  constructor(private serv: SignupService) {

    this.isLoggedIn$ = this.serv.isLoggedIn;
    this.isAdmin$ = this.serv.isAdmin;
    this.userName$ = this.serv.currentUsr;
  }
  ngOnInit(): void {
    this.isLoggedIn$ = this.serv.isLoggedIn;

    console.log(this.isLoggedIn$);
    this.isAdmin$ = this.serv.getAdmin;
    this.userName$ = this.serv.currentUsr;
// console.log("nav-bar: " + this.isAdmin$)
    //   if (sessionStorage.getItem('id') == null) {
    //     // this.loggedIn.next(false)
    //     //  this.serv.setLoggedIn(false);
    //      this.isLoggedIn$ = this.serv.isLoggedIn;

    // }
    // else{
    //   // this.loggedIn.next(true)
    //   // this.serv.isAuthorized.subscribe((dat)=>{
    //   //   this.isLoggedIn = dat
    //   // });
    //   // this.serv.setLoggedIn(true);
    //   this.isLoggedIn$ = this.serv.isLoggedIn;
    // }

  }

  onLogout() {
    // sessionStorage.removeItem('id');
    // sessionStorage.removeItem('currentUserRole');
    sessionStorage.clear();

    this.serv.setLoggedIn(false);
    // this.serv.getAdmin;
    // alert("log out")
  }
}
