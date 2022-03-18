import { createReducer, on } from '@ngrx/store';
import { Book } from '../book-list/books.model';
import { addBook, removeBook, retrievedBook } from './book.actions';

export const initialState: Book[] = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBook, (state, { bookList }) => bookList)
);
