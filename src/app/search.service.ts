import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private url: string;

  constructor(private http: HttpClient) { }

  search(search: any) {
    this.url = 'http://localhost:8091/keywords/bookComp/' + search;
    return this.http.get(this.url);
  }

}
