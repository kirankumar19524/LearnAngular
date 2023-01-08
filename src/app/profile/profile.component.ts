import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SignupService, User } from '../login/signup.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
/**
 *
 */
profileDetails: Observable<User>;
constructor(private serv: SignupService)  {
  this.profileDetails = new Observable<User>;
}

ngOnInit(): void {
this.profileDetails = this.serv.currentUsr;
}
}
