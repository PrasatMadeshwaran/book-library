import { Component, OnInit } from '@angular/core';
import { BookImplService } from '../book-impl.service';
import { Subject, Observable } from 'rxjs';
import { Book } from '../book';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService:BookImplService) { }  
  
  booksArray: any[] = [];  
  dtOptions: DataTables.Settings = {};  
  dtTrigger: Subject<any>= new Subject();  
  
  books: Observable<Book[]>;  
  book : Book=new Book();  
  deleteMessage=false;  
  bookList:any;  
  isupdated = false;      
   
  
  ngOnInit() {  
    this.isupdated=false;  
    this.dtOptions = {  
      pageLength: 6,  
      stateSave:true,  
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],  
      processing: true  
    };     
    this.bookService.getBookList().subscribe(data =>{  
      this.books =data;  
      this.dtTrigger.next();  
    })  
  }  
    
  updateBook(id: number){  
    this.bookService.getBook(id)  
      .subscribe(  
        data => {  
          this.bookList=data             
        },  
        error => console.log(error));  
  }  
  
  bookUpdateForm=new FormGroup({ 
    id: new FormControl(), 
    title:new FormControl(),  
    author:new FormControl(),  
    status:new FormControl(),  
    genre:new FormControl()  
  });  
  
  updateBuk(updbuk){  
   this.book=new Book();   
   this.book.id=this.BookId.value;  
   this.book.title=this.BookTitle.value; 
   this.book.author=this.BookAuthor.value;
   this.book.genre=this.BookGenre.value; 
   this.book.status=this.BookStatus.value;
   console.log(this.BookStatus.value);  
     
  
   this.bookService.updateBook(this.book.id,this.book).subscribe(  
    data => {       
      this.isupdated=true;  
      this.bookService.getBookList().subscribe(data =>{  
        this.books =data  
        })  
    },  
    error => console.log(error));  
  }  
  
  get BookTitle(){  
    return this.bookUpdateForm.get('title');  
  }  
  
  get BookAuthor(){  
    return this.bookUpdateForm.get('author');  
  }  
  
  get BookGenre(){  
    return this.bookUpdateForm.get('genre');  
  }  

  get BookStatus(){  
    return this.bookUpdateForm.get('status');  
  } 
  
  get BookId(){  
    return this.bookUpdateForm.get('id');  
  }  
  
  changeisUpdate(){  
    this.isupdated=false;  
  }  

}
