import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  private url = 'http://localhost:8091/file';
  public t:any;
  constructor(private http: HttpClient) { }

  public download(ids,toc){
    if(toc){
      this.t=1;
    }else {
      this.t = 0;
    }
    return this.http.get(this.url, {
      params: {
        ids: ids,
        toc: this.t
      },
      observe: 'response',
      responseType: 'text'
    });
  }

}
