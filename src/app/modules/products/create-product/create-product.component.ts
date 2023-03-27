import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActionsSubject, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {skip, Subject, takeUntil} from "rxjs";
import {Actions, ofType} from "@ngrx/effects";
import * as ProductActionsTypes from '../store/products.actions'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy {
  name = ''
  destroy$ = new Subject();

  constructor(private store: Store, private actionListener$: Actions, private router: Router) {
  }

  ngOnInit() {
    this.actionListener$.pipe(
      skip(1),
      ofType(ProductActionsTypes.add),
      takeUntil(this.destroy$)
    ).subscribe((action: any) => {
      this.router.navigateByUrl('/products')
    });
  }

  submit(): void {
    this.store
      .dispatch(ProductActionsTypes.process({product: {name: this.name}}));
  }

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.complete()
  }
}
