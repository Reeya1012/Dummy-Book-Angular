import { Component, OnInit } from '@angular/core';
import { BooksInfo } from '../booksInfo';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [BooksInfo]
})
export class BooksComponent implements OnInit {

  booksRecord:{ id: number, bookName: string, bookInfo: string, bookImg: string }[] = []

  constructor(private bookService: BooksInfo) { }

  ngOnInit(): void {
    this.booksRecord = this.bookService.books
    console.log(this.booksRecord)
  }

}
