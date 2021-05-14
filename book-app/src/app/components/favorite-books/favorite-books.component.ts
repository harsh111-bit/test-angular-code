import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book-service';
import {BookModel} from '../../models/book-model';

@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.component.html',
  styleUrls: ['./favorite-books.component.scss']
})
export class FavoriteBooksComponent implements OnInit {
  books: BookModel[] = [];
  isBooks: boolean;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.favoriteBooks.subscribe(books => {
      this.books = books;
      this.isBooks = !!books.length;
    })
  }

  removeBook(id: string) {
    this.bookService.removeFavoriteBooks(id);
  }

}
