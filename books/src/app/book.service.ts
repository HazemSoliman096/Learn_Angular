import { Injectable } from '@angular/core';
import { Observable, observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { Book } from './books/book';
import { Books } from './books/mock_books';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private messageService: MessageService) { }

  getBooks(): Observable<Book[]> {
    const books = of(Books);
    this.messageService.add('Book Service : Fetched Books');
    return books;
  }

  getBook(id:number): Observable<Book> {
    const book = Books.find(b => b.id === id)!;
    this.messageService.add(`book service fetched book of id = ${id}`);
    return of(book);
  }
}
