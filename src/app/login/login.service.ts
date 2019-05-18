import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { menu } from "../Model/Menu";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { 

     
  }
  MenuBar : menu[] =[
    { menuName : 'DashBoard' , menuURl : "dashborad" },
    { menuName : 'Merchant' , menuURl : "Merchant" },
    { menuName : 'DashBoard' , menuURl : "dashborad" },
    { menuName : 'DashBoard' , menuURl : "dashborad" }
  ]

  login(User: string, Password: string): Observable<any> {
    if (User == "admin" && Password == "admin")
      // return this.http.get<any>("url")
      return of(true);
      else 
      return of(false)
  }

  Menu(UserID: string, Role: string): Observable<menu[]> {
    
    return of<menu[]>(this.MenuBar);
  }

  private messageSource = new BehaviorSubject('log');
  currentMessage = this.messageSource;

  changeMessage(message: string) {
    this.messageSource.next(message);
  }

}
