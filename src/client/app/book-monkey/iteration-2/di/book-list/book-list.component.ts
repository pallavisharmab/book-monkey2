import {Component} from 'angular2/core';
import {BookListItem} from '../book-list-item/book-list-item.component';
import {Book} from '../domain/book';
import {BookStoreService} from '../services/books/book-store.service';

@Component({
  selector: 'book-list',
  directives: [BookListItem],
  moduleId: module.id,
  templateUrl: 'book-list.component.html',
  providers: [BookStoreService]
})
export class BookListComponent {
  books: Book[];

  constructor(private bs: BookStoreService) {
    this.books = bs.getAll();
  }
}