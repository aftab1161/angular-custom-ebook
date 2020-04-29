import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UploadComponent} from "./upload/upload.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {SearchComponent} from "./search/search.component";
import {BuildComponent} from "./build/build.component";


const routes: Routes = [
  { path: '', redirectTo: 'addBook', pathMatch: 'full'},
  { path: 'upload/:id', component: UploadComponent },
  { path: 'addBook', component: AddBookComponent },
  { path: 'search', component: SearchComponent },
  { path: 'build', component: BuildComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
