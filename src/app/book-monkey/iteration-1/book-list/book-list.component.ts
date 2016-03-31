import {Component} from 'angular2/core';
import {BookListItem} from './book-list-item.component';
import {Book, Thumbnail} from '../domain/book';

@Component({
  selector: 'it1-book-list',
  directives: [BookListItem],
  templateUrl: '/app/book-monkey/iteration-1/book-list/book-list.component.html'
})
export class BookListComponent {
  books: Book[];

  constructor() {
    let book1 = new Book(
      '978-3864903571',
      'Angular 2',
      ['Johannes Hoppe', 'Danny Koppenhagen', 'Ferdinand Malcher', 'Gregor Woiwode']
    );
    book1.subtitle = 'Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen';
    book1.thumbnails = [ new Thumbnail('http://goo.gl/nDi0Fc','Buchcover')];

    let book2 = new Book(
      '978-3864901546',
      'AngularJS',
      ['Philipp Tarasiewicz', 'Robin Böhm']
    )
    book2.subtitle = 'Eine praktische Einführung';
    book2.thumbnails = [ new Thumbnail('https://goo.gl/Y5lFVE','Buchcover')];

    this.books = [
      book1, book2
    ];
  }
}
