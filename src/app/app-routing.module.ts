import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    loadChildren: () => import('@/modules/books/books.module').then(m => m.BooksModule),
    path: 'books',
  },
  {
    path: 'products',
    loadChildren: () => import('@/modules/products/products.module').then(m => m.ProductsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
