import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-pagenotfound404',
  templateUrl: './pagenotfound404.component.html',
  styleUrls: ['./pagenotfound404.component.css']
})
export class Pagenotfound404Component implements OnInit {
page:string = '';
constructor(private route: ActivatedRoute) {}

ngOnInit(): void {
  alert("you are redirected to Login screen!");
  window.location.href = '/login';
  this.page = "Login";
}
  

}

