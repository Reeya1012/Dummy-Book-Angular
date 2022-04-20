import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BooksInfo } from 'src/app/booksInfo';

@Component({
  selector: 'app-bookpreview',
  templateUrl: './bookpreview.component.html',
  styleUrls: ['./bookpreview.component.scss'],
  providers: [BooksInfo]
})
export class BookpreviewComponent implements OnInit {

  id: number = 0;
  booksRecord:{ id: number, bookName: string, bookInfo: string, bookImg: string } = {
    id: 0,
    bookName:'',
    bookInfo: '',
    bookImg:''
  }
  bookRecord:{ id: number, bookName: string, bookInfo: string, bookImg: string }[] = []
  recordLength: number = 0; 

  constructor(private route: ActivatedRoute,
              private booksService: BooksInfo ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => { 
        this.id = params['id']
        console.log(this.id)
        this.recordLength = this.booksService.books.length
        this.booksRecord = this.booksService.searchBook(this.id)
        this.bookRecord = []
        for(var i = 0;i<this.booksService.books.length;i++){
          if(this.booksService.books[i].id != this.id)
            this.bookRecord.push(this.booksService.books[i])
        }
      }
    );    
  }
}
