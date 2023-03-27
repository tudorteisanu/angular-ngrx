import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {hide, show} from "@/store/modules/alert.actions";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-ngrx';

  state$ = this.store.select(state => state)
  alertItems$ = this.store.select((state: any) => state.alert.items)

  constructor(private store: Store) {
  }

  showAlert(): void {
    this.store.dispatch(show({alert: { title: 'success', message: "Some error message" }}))
  }

  removeAlert(id: number): void {
    this.store.dispatch(hide({id}))
  }
}
