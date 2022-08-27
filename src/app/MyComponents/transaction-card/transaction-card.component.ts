import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-transaction-card',
  templateUrl: './transaction-card.component.html',
  styleUrls: ['./transaction-card.component.css'],
})
export class TransactionCardComponent implements OnInit {
  balance$!: Observable<number>;
  constructor(private store: Store<{ balance: number }>) {
    this.balance$ = store.select('balance');
  }

  ngOnInit(): void {}
}
