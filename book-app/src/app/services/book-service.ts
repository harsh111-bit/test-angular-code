import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {BookModel} from '../models/book-model';

@Injectable()
export class BookService {
  private readonly fetchUrl = 'https://609cd6ba04bffa001792d638.mockapi.io/books';
  // tslint:disable-next-line:variable-name
  private _singleBookDetail = new BehaviorSubject<BookModel | null>(null);
  // tslint:disable-next-line:variable-name
  private _favoriteBooks: BookModel[] = [];

  get singleBookDetail() {
    return this._singleBookDetail.value;
  }

  get favoriteBooks() {
    return this._favoriteBooks;
  }

  setSingleBookDetail(val: BookModel) {
    this._singleBookDetail.next(val);
  }

  constructor(private http: HttpClient) {
  }

  getBooks(): Observable<any> {
    return this.http.get(this.fetchUrl);
  }

  pushFavoriteBooks(book: BookModel) {
    if (!!book) {
      this.favoriteBooks.push(book);
    }
  }


}
