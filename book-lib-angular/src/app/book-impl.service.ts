import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookImplService {

  private baseUrl = 'http://localhost:8080/api/books/';  
  
  constructor(private http:HttpClient) { }  
  
  getBookList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'getAllBooks');  
  }  
  
  addBook(book: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'addBook', book);  
  }  

  getBook(id: number): Observable<Object> {  
    return this.http.get(`${this.baseUrl}/book/${id}`);  
  } 
  
  updateBook(id: number, value: any): Observable<Object> {  
    return this.http.post(`${this.baseUrl}/updateBook/${id}`, value);  
  }
}
