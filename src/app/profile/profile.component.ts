import { Component, OnInit } from '@angular/core';
import { SignupService } from '../login/signup.service';
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
profileDetails: any;
constructor(private serv: SignupService)  {
  
}

ngOnInit(): void {
this.profileDetails = this.serv.currentUsr;
}
}
