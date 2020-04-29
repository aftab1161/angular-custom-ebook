import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DownloadService} from "../download.service";
import {ActivatedRoute} from "@angular/router";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";
import {SharedDataService} from "../shared-data.service";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})
export class BuildComponent implements OnInit {
  @ViewChild("a", {static: false}) aLink: ElementRef;
  public selected: any;
  public ids: string;
  public toc: any;
  public downloadLink:string;

  constructor(private downloadService: DownloadService,private route: ActivatedRoute,private sharedData: SharedDataService) { }

  ngOnInit(): void {
    this.selected = this.sharedData.sharedData;
    console.log("build");
    console.log(this.selected);
  }

  onDownload() {
    console.log(this.selected);
    this.ids = "";
    this.selected.forEach((value) => {
         this.ids = this.ids + value.id +',';
    });
    this.ids = this.ids.slice(0,this.ids.length-1);
    ///
    let httpParams = new HttpParams();
    httpParams = httpParams.append('ids', this.ids);
    if(this.toc){
      httpParams = httpParams.append('toc', '1');
    }else {
      httpParams = httpParams.append('toc', '0');
    }

    //console.log(httpParams.toString());
    this.downloadLink = 'localhost:8091/file?';
    this.downloadLink = this.downloadLink + httpParams.toString();
    //
    // this.downloadService.download(this.ids,this.toc).subscribe((event: any) => {
    //   console.log(event.body);
    //   this.downloadLink = event;
    // });
    //this.aLink.nativeElement.click();
    //console.log(this.downloadLink);
    window.open(this.downloadLink);
  }


  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selected, event.previousIndex, event.currentIndex);
  }
}
