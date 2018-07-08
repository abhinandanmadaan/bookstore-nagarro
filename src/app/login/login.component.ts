import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient , private route: Router) { }

  ngOnInit() {
  }

  onlogin(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // tslint:disable-next-line:max-line-length
    this.http.post('api/login', { email: form.value.email , password: form.value.password })
      .subscribe((response: any) => {
        console.log(response.userId);
        console.log(response.userName);
        console.log(response.token);
        // tslint:disable-next-line:max-line-length
        if (  response === false  ) {alert('incorrect username or password or both'); } else { localStorage.setItem('token', response.token);  alert('you are successfully logged in '); this.route.navigate(['']); }
        });
  }

}
