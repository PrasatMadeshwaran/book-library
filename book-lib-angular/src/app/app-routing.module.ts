import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';


const routes: Routes = [  
  { path: '', redirectTo: 'bookList', pathMatch: 'full' },  
  { path: 'bookList', component: BookListComponent },  
  { path: 'addBook', component: AddBookComponent },  
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
