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

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = this.bookService.favoriteBooks;
  }

}
