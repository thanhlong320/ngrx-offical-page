import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from './books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.sass'],
})
export class BookListComponent implements OnInit {
  @Input() books: Book[] = [];
  @Output() add = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
