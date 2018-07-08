import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

constructor(private http: HttpClient , private route: Router) { }

  ngOnInit() {
  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // tslint:disable-next-line:max-line-length
    this.http.post('api/signup', {name: form.value.name , email: form.value.email , address: form.value.address , phone: form.value.phone , password: form.value.password , college: form.value.college })
      .subscribe((response: any) => {
        // tslint:disable-next-line:max-line-length
        if (response === false ) {alert('A user with the entered email already exists'); } else {localStorage.setItem('token', (response.token)); alert('you are successfully registered');  this.route.navigate(['']); }
        });
  }

}
