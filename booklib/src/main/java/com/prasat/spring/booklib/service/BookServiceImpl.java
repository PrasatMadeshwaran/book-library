package com.prasat.spring.booklib.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.prasat.spring.booklib.dao.BookDao;
import com.prasat.spring.booklib.model.Book;

@Service
@Transactional 
public class BookServiceImpl implements BookService {

	@Autowired
	private BookDao dao;

	@Override
	public boolean addBook(Book book) {
		return dao.addBook(book);
	}
	
	@Override
    public List<Book> getBookByID(Book book) {  
        return dao.getBookByID(book);  
    } 

	@Override
	public List<Book> getAllBooks() {
		return dao.getAllBooks();
	}

	@Override
	public boolean alterBookDetail(Book book) {
		return dao.alterBookDetail(book);
	}

}
