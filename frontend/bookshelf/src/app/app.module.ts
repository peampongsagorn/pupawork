import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {BooksComponent } from './books/books.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { BookSearchComponent } from './book-search/book-search.component';
import {ButtonModule} from 'primeng/button';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent,
    DashboardComponent,
    BookSearchComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
  
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
