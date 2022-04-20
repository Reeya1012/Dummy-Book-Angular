import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { BooksInfo } from '../booksInfo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [BooksInfo]
})
export class HomeComponent implements OnInit {

  booksRecord:{ id: number, bookName: string, bookInfo: string, bookImg: string }[] = []

  pauseOnHover = true
  paused = false
  unpauseOnArrow = false
  pauseOnIndicator = false

  @ViewChild('carousel', { static: true })
  carousel!: NgbCarousel;

  constructor(private bookService: BooksInfo,
              private router: Router) { }

  ngOnInit(): void {
    this.booksRecord = this.bookService.books
    console.log(this.booksRecord)
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onClick(){
    this.router.navigate(['/books'])
  }

}
