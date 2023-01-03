import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, observable, Observable, throwError } from 'rxjs';
import { catchError, first, map, mergeMap, retry, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})



export class SignupService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private isAdmins: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private currentUser: BehaviorSubject<User> = new BehaviorSubject<User>(new User);

  endpoint = 'http://localhost:3000';
  success: boolean = true;
  constructor(private http: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  get currentUsr() {
    var user = sessionStorage.getItem("currentUserRole")
    if (user) {
      var obj = JSON.parse(user);
      this.currentUser.next(obj);

    }

    return this.currentUser.asObservable();
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  setLoggedIn(data: boolean) {
    this.loggedIn.next(data);
  }

  get isAdmin() {
    return this.isAdmins.asObservable();
  }

  get getAdmin() {

    var user = sessionStorage.getItem("currentUserRole")
    if (user) {
      var obj = JSON.parse(user);
      // console.log("nav-bar: " +obj.role )
      if (obj.role == 'admin') {
        this.isAdmins.next(true);
      }
      else {
        this.isAdmins.next(false);
      }
    }

    return this.isAdmins.asObservable();
  }

  addUser(data: any): Observable<User> {
    return this.http
      .post<User>(
        this.endpoint + '/Employees',
        JSON.stringify(data),
        this.httpHeader
      )
      .pipe(retry(1), catchError(this.processError));
  }

  getUser(email: string): Observable<any> {
    return this.http.get<Array<User>>(this.endpoint + '/Employees?username=' + email,
      this.httpHeader
    )
      .pipe(
        //first(val => val.username == email),

        tap(d => {
          console.log(d);
          console.log("signup service");

          sessionStorage.setItem('currentUserRole', JSON.stringify(d[0]))
          this.getAdmin;
          this.currentUsr;
        }),
        retry(1), catchError(this.processError));
  }

  getItems(): Observable<Item> {
    return this.http.get(this.endpoint + '/items',
      this.httpHeader
    )
      .pipe(retry(1), catchError(this.processError));
  }

  processError(err: any) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(() => {
      message;
    });
  }

}

export class User {
  id?: number;
  username?: string;
  email?: string;
  password?: string;
  role?: string;
}

export class Item {
  id?: number;
  name?: string;
  itemType?: string;
  price?: string;
}
