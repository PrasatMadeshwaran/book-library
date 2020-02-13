package com.prasat.spring.booklib.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.prasat.spring.booklib.model.Book;

@Repository
public class BookDaoImpl implements BookDao {

	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public boolean addBook(Book book) {
		boolean status=false;  
        try {  
            sessionFactory.getCurrentSession().save(book);  
            status=true;  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        return status;  
	}
	
	@Override
	public List<Book> getBookByID(Book book) {  
        Session currentSession = sessionFactory.getCurrentSession();  
        Query<Book> query=currentSession.createQuery("from Book where id=:id", Book.class);  
        query.setParameter("id", book.getId());  
        List<Book> list=query.getResultList();  
        return list;  
    }

	@Override
	public List<Book> getAllBooks() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Book> query = currentSession.createQuery("from Book", Book.class);
		List<Book> list = query.getResultList();
		return list;
	}

	@Override
	public boolean alterBookDetail(Book book) {
		boolean status=false;  
        try {  
            sessionFactory.getCurrentSession().update(book);  
            status=true;  
        } catch (Exception e) {  
            e.printStackTrace();  
        }  
        return status;  
	}

}
