import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-listing',
  templateUrl: './single-listing.component.html',
  styleUrls: ['./single-listing.component.css']
})
export class SingleListingComponent implements OnInit {
  books: any ;
  constructor(private router: ActivatedRoute , private http: HttpClient) { }

  ngOnInit() {
    this.router.paramMap.subscribe( (params: ParamMap) => {

      this.http.post('api/list-item', {id: +(params.get('id'))})
      .subscribe(response => {
      this.books = response;
          });

  });
}

  add_wish(bookId) {

    // phele authentication lga
    this.http.post('api/check-auth', { token : (localStorage.getItem('token')) })
   .subscribe((response: any) => {
     if (response === false) {
        alert('you need to login first'); } else {
          /* const userId = localStorage.getItem(JSON.parse('userId')); */
          const userId = response.userId;
  // tslint:disable-next-line:semicolon
  this.http.post('api/add_to_wishlist', {userId: userId , bookId: bookId})
  .subscribe(res => {
    if (res) {
      alert('added to wishlist');
    } else { alert('already added to wishlist'); }
  });

    }
    });

    }
}
