import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book-service';
import {BookModel} from '../../models/book-model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books: BookModel[] = [];
  isLoading = false;
  isFavoriteBooksLength = false;

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    },
      (e) => {
        console.log(e, 'error while fetching books.');
      },
      () => this.isLoading = false
    );

    this.isFavoriteBooksLength = !!this.bookService.favoriteBooks.length;
  }

  showDetails(id: string) {
    this.bookService.setSingleBookDetail(this.getSingleBookDetail(id));
    this.router.navigate([`${+id}/detail`], {relativeTo: this.route});
  }

  private getSingleBookDetail(id: string) {
    const book = this.books.find((b) => b.id === id);
    if (!!book) {
      return book;
    } else {
      return null;
    }
  }
}
