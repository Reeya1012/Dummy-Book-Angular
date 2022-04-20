import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { BooksInfo } from '../booksInfo';

@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.scss'],
  providers: [BooksInfo]
})



export class AddbooksComponent implements OnInit {
  
  // bookRecord:{ id: number, bookName: string, bookInfo: string, bookImg: string }[] = []
  displayedColumns: string[] = ['id', 'name', 'info', 'img'];

  bookRecord: MatTableDataSource<any> = new MatTableDataSource<any>()

  name: string = ''
  info: string = ''
  imglink: string = ''

  //bookRecord: MatTableDataSource<BooksInfo>;

  constructor(private bookService:BooksInfo,
              private route: Router) { 
              }

  ngOnInit(): void {
    this.bookRecord = new MatTableDataSource<any>(this.bookService.books);
  }

  onClick(){
    this.bookService.addBook(this.name, this.info, this.imglink)
    this.bookRecord = new MatTableDataSource<any>(this.bookService.books);
    console.log(this.bookRecord)
  }

}
