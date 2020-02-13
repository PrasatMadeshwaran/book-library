package com.prasat.spring.booklib.service;

import java.util.List;

import com.prasat.spring.booklib.model.Book;

public interface BookService {

	public boolean addBook(Book book);
	
	public List<Book> getBookByID(Book book);

	public List<Book> getAllBooks();

	public boolean alterBookDetail(Book book);

}
