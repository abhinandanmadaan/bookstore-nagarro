import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressSpinnerModule,
  MatPaginatorModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule
  } from '@angular/material';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ListingsComponent } from './listings/listings.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { AddListingComponent } from './add-listing/add-listing.component';
import { SingleListingComponent } from './single-listing/single-listing.component';
import { FilterSearchPipe } from './listings/filter-search.pipe';
import { FilterConditionPipe } from './listings/filter-condition.pipe';
import { FilterPricePipe } from './listings/filter-price.pipe';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {
    path: '',
   component: ListingsComponent
  },
 {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'add',
    component: AddListingComponent
  },
  {
    path: 'wishlist',
    component: WishlistComponent
  },
  {
    path: ':id',
    component: SingleListingComponent
  },
  ];


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    ListingsComponent,
    HeaderComponent,
    LoginComponent,
    AddListingComponent,
    SingleListingComponent,
    FilterSearchPipe,
    FilterConditionPipe,
    FilterPricePipe,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
