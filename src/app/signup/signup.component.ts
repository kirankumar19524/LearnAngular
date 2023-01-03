import { Component, OnInit } from '@angular/core';
import { SignupService } from '../login/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isSignupCompleted: boolean = false;
  /**
   *
   */
  constructor(private signupService: SignupService) { }
  ngOnInit() {
    this.isSignupCompleted = false;
  }

  onSignup(data: any) {
    console.log(data);
    this.signupService.addUser(data).subscribe((data: {}) => {
      this.isSignupCompleted = true;
    });

  }
}
