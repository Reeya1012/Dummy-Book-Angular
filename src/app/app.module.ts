import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { BookpreviewComponent } from './books/bookpreview/bookpreview.component';
import { AddbooksComponent } from './addbooks/addbooks.component';
import { MatTableModule } from '@angular/material/table';
import { ResponseFormComponent } from './response-form/response-form.component'

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent },
  { path: 'bookpreview/:id', component: BookpreviewComponent },
  { path: 'addbook', component: AddbooksComponent },
  { path: 'response', component: ResponseFormComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BooksComponent,
    BookpreviewComponent,
    AddbooksComponent,
    ResponseFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
