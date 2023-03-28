import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";

import {EffectsModule} from "@ngrx/effects";
import {ProductsEffects} from "./store/products.effects";
import { ProductLostComponent } from './product-lost/product-lost.component';
import {RouterModule, Routes} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {productsReducer} from "./store/products.reducer";
import {CreateProductComponent} from "./create-product/create-product.component";
import {FormComponentsModule} from "nanoit-angular-modules";

const routes: Routes = [
  {
    path: '',
    component: ProductLostComponent
  },
  {
    path: 'create',
    component: CreateProductComponent
  },
]

@NgModule({
  declarations: [
    ProductLostComponent,
    CreateProductComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(productsReducer),
    EffectsModule.forFeature([ProductsEffects]),
    RouterModule.forChild(routes),
    FormsModule,
    FormComponentsModule
  ]
})
export class ProductsModule { }
