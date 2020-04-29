import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

class Book {
  book_name: string;
  author_name: string;
  isbn: string;
  publisher: string;
  constructor(book: string, author: string, isbn: string, publisher: string) {
    this.book_name = book;
    this.author_name = author;
    this.isbn = isbn;
    this.publisher = publisher;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AddBookService {
  private url = 'http://localhost:8091/bookauthor';




  constructor(private httpClient: HttpClient){
  }

  public add(book,author,isbn,publisher) {
    let newBook = new Book(book,author,isbn,publisher);
    const httpOptions : { headers; observe; }= {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      }),
      observe : 'response'
    };

    return this.httpClient.post<any>(this.url, JSON.stringify(newBook), httpOptions);
  }


}

