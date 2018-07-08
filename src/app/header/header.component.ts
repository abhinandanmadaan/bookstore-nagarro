import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  auth_status: boolean = false;
  // tslint:disable-next-line:no-inferrable-types
  userName: string = 'Guest';
  // tslint:disable-next-line:no-inferrable-types
  userId: number = 0;

  constructor(private http: HttpClient , private route: Router) { }

  ngOnInit() {

       if (!! localStorage.getItem('token')) {
         this.http.post('api/check-auth', { token : (localStorage.getItem('token')) })
      .subscribe((response: any) => {
        if (response !== false) {
           this.auth_status = true;
           this.userName = response.userName;
           this.userId = response.userId;
           localStorage.setItem('userId' , JSON.stringify(this.userId));
 }
        });
  }

}
  onLogout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.route.navigate(['/login']);
    this.route.navigate(['']);

}




}
