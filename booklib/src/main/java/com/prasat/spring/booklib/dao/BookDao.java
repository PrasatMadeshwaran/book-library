package com.prasat.spring.booklib.dao;

import java.util.List;

import com.prasat.spring.booklib.model.Book;

public interface BookDao {
	
	public boolean addBook(Book book);
	
	public List<Book> getBookByID(Book book);
	
	public List<Book> getAllBooks();
	
	public boolean alterBookDetail(Book book);

}
