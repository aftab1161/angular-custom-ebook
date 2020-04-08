import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

class Book {
  book_name: string;
  author_name: string;
  constructor(book: string, author: string) {
    this.book_name = book;
    this.author_name = author;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  private url = 'http://localhost:8091/bookauthor';



  // URL to web api
  constructor(private httpClient: HttpClient){
  }

  public add(book,author) {
    let newBook = new Book(book,author);


    return this.httpClient.post<any>(this.url, JSON.stringify(newBook), {
      reportProgress: true,
      observe: 'events'
    });
  }


}

