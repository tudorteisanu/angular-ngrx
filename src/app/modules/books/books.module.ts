import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import {StoreModule} from "@ngrx/store";
import {booksReducer} from "./store/books.reducer";
import {EffectsModule} from "@ngrx/effects";
import {BooksEffects} from "./store/books.effects";
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  }
]

@NgModule({
  declarations: [
    BooksListComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(booksReducer),
    EffectsModule.forFeature([BooksEffects]),
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class BooksModule { }
