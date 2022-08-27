import { createAction, props } from '@ngrx/store';

export const credit = createAction(
  '[Counter Component] Credit',
  props<{ amount: number }>()
);
export const debit = createAction(
  '[Counter Component] Debit',
  props<{ amount: number }>()
);
export const reset = createAction('[Counter Component] Reset');
