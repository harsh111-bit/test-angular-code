import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book-service';
import {BookModel} from '../../models/book-model';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book: BookModel;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.book = this.bookService.singleBookDetail;
  }
   addToFavorites() {
     this.bookService.pushFavoriteBooks(this.book);
   }

}
