import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookImplService } from '../book-impl.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private bookService:BookImplService) { }  
  
  book : Book=new Book();  
  submitted = false;  
  
  ngOnInit() {  
    this.submitted=false;  
  }  
  
  bookSaveForm=new FormGroup({  
    title:new FormControl(),  
    author:new FormControl(),  
    genre:new FormControl(),
    status:new FormControl()  
  });  
  
  saveBook(newBook){  
    this.book=new Book();     
    this.book.title=this.BookTitle.value;
    this.book.author=this.BookAuthor.value;  
    this.book.genre=this.BookGenre.value;  
    this.book.status=this.BookStatus.value;  
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.bookService.addBook(this.book) 
      .subscribe(data => console.log(data), error => console.log(error));  
    this.book = new Book();  
  }  
  
  get BookTitle(){  
    return this.bookSaveForm.get('title');  
  }  
  
  get BookAuthor(){  
    return this.bookSaveForm.get('author');  
  }  
  
  get BookGenre(){  
    return this.bookSaveForm.get('genre');  
  }  

  get BookStatus(){  
    return this.bookSaveForm.get('status');  
  } 
  
  addBookForm(){  
    this.submitted=false;  
    this.bookSaveForm.reset();  
  }  

}
