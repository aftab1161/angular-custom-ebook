import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DownloadService} from "../download.service";
import {saveAs} from 'file-saver';
import {SearchService} from "../search.service";
import {catchError, map} from "rxjs/operators";
import {HttpErrorResponse} from "@angular/common/http";
import {of} from "rxjs";
import {Router} from "@angular/router";
import {SharedDataService} from "../shared-data.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @ViewChild("link", {static: false}) link: ElementRef;
  search: any;
  components: any = [];
  selected;
  url: string;



  constructor(private router: Router,private searchService: SearchService,private sharedData: SharedDataService) { }

  ngOnInit(): void {
  }


  onSearch() {
    this.searchService.search(this.search).subscribe((event: any) => {
      console.log(event);
      this.components = event;
    });

  }

  onDownload() {
    console.log(this.components);
    this.selected = new Array();
    this.url = 'http://localhost:8091/file?ids=7,8';
    this.components.forEach((value) => {
      if(value.isSelected == true){
          this.selected.push(value.id);
          // this.url = this.url + value.id +',';
      }
    });
    console.log(this.selected);

    this.components.forEach
    this.link.nativeElement.click();
  }

  onBuild() {
    console.log(this.components);
    this.selected = new Array();
    this.components.forEach((value) => {
      if(value.isSelected == true){
        this.selected.push(value);
      }
    });
    console.log(this.selected);
    this.sharedData.sharedData = this.selected
    this.router.navigate(['/build']);
  }
}
