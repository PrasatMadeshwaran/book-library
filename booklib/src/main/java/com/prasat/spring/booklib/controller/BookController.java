package com.prasat.spring.booklib.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.prasat.spring.booklib.model.Book;
import com.prasat.spring.booklib.service.BookService;

@RestController
@CrossOrigin(origins="http://localhost:4200")  
@RequestMapping("/api/books")  
public class BookController {
	@Autowired
	private BookService service;  
      
    @PostMapping("/addBook")  
    public boolean addBook(@RequestBody Book book) {  
         return service.addBook(book);  
          
    } 
    
    @GetMapping("book/{id}")  
    public List<Book> allBookByID(@PathVariable("id") int id,Book book) {  
         book.setId(id); 
         return service.getBookByID(book);  
          
    } 
      
    @GetMapping("getAllBooks")  
    public List<Book> getAllBooks() {  
         return service.getAllBooks();  
          
    }  
      
    @PostMapping("updateBook/{book_id}")  
    public boolean updateBook(@RequestBody Book book,@PathVariable("book_id") int id) {  
        book.setId(id); 
        return service.alterBookDetail(book);  
    }
}
