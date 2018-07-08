import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  books: any = [];
  // tslint:disable-next-line:no-inferrable-types
  userId: number = 0;




  constructor(private http: HttpClient ) { }

  ngOnInit() {
    this.initialise();
   }

      initialise() {
        this.http.post('api/check-auth', { token : (localStorage.getItem('token')) })
       .subscribe((response: any) => {
         console.log(response.userId);
         this.userId = response.userId;
        this.http.post('api/wishlist', { userId: this.userId })
                .subscribe(data => {
                  console.log(data);
                  this.books = data;
                });
                 });
              }
}
