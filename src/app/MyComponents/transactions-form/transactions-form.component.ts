import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { credit, debit } from 'src/app/state/transaction.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.css'],
})
export class TransactionsFormComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  balance$!: Observable<number>;

  constructor(
    private fb: FormBuilder,
    private store: Store<{ balance: number }>,
    private router: Router
  ) {
    this.balance$ = store.select('balance');
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      Name: [null, [Validators.required, Validators.minLength(10)]],

      Type: [
        null,
        [Validators.required, Validators.min(1), Validators.max(10000)],
      ],
      Amount: [null, [Validators.required]],
    });
  }

  saveDetails(form: any) {
    if (form.value.Type == 'Credit') {
      this.store.dispatch(credit({ amount: form.value.Amount }));
    } else {
      this.store.dispatch(debit({ amount: form.value.Amount }));
    }
    this.router.navigate(['home']);
  }
}
