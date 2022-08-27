import { createReducer, on } from '@ngrx/store';
import { Transaction } from '../MyComponents/transactions-table/transactions-table.component';
import { credit, debit, reset } from './transaction.actions';

export const initialState = 10000;

export const transactionReducer = createReducer(
  initialState,
  on(debit, (state, { amount }) => state - amount),
  on(credit, (state, { amount }) => state + amount)
);
