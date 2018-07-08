import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  selectedCondition: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  onAdd(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(form.value.condition);
    // tslint:disable-next-line:max-line-length
    this.http.post('api/add', { seller: form.value.seller , name: form.value.name , author: form.value.author , price: form.value.price , img: form.value.imageUrl , condition: this.selectedCondition  })
      .subscribe(response => {
        console.log(response);
        if ( response === true )
        // tslint:disable-next-line:one-line
        {alert('your listing has been  successfully added'); } else {alert('you have already added this listing'); }
        });
  }


}
