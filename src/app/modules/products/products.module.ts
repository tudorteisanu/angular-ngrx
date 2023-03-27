import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";

import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "@/modules/products/store/products.effects";
import { ProductLostComponent } from './product-lost/product-lost.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {productsReducer} from "./store/products.reducer";

const routes: Routes = [
  {
    path: '',
    component: ProductLostComponent
  }
]

@NgModule({
  declarations: [
    ProductLostComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class ProductsModule { }
