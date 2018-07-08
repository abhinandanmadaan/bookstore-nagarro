import { Component, OnInit , Input } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  // tslint:disable-next-line:whitespace
  searchText ='';
  selectedCondition = 'No Filter';
  selectedPrice = 'No Filter';
  books: any = [];


  constructor(private http: HttpClient,  private router: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.http.get<any>('/api/listings')
  .subscribe((data) => {this.books = data; });
  }

   listing_item(id) {

    this.route.navigate([id], { relativeTo: this.router});
    console.log(id);
    }

}






