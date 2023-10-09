import { Component, OnInit } from '@angular/core';

import {Product} from '../product';
import {Store} from '@ngrx/store';
import {getCurrentProduct, getError, getProducts, getShowProductCode, State} from '../state/product.reducer';
import * as ProductActions from '../state/product.actions';
import {Observable} from 'rxjs';

@Component({
  templateUrl: './product-shell.component.html'
})
export class ProductShellComponent implements OnInit {


  products$: Observable<Product[]>;
  displayCode$: Observable<boolean>;
  errorMessage$: Observable<string>;

  selectedProduct$: Observable<Product>;
  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(ProductActions.loadProducts());
    this.products$ = this.store.select(getProducts);
    this.errorMessage$ = this.store.select(getError);
    this.displayCode$ = this.store.select(getShowProductCode);
    // @ts-ignore
    this.selectedProduct$ = this.store.select(getCurrentProduct);
  }

  checkChanged(): void {
    this.store.dispatch(ProductActions.toggleProductCode());
  }

  newProduct(): void {
    this.store.dispatch(ProductActions.initializeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(ProductActions.setCurrentProduct({ currentProductId: product.id }));
  }
}
