import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transactions-table',
  templateUrl: './transactions-table.component.html',
  styleUrls: ['./transactions-table.component.css'],
})
export class TransactionsTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'party', 'type', 'amount', 'date'];
  dataSource = new MatTableDataSource<Transaction>(transactionData);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Transaction {
  partyName: string;
  position: number;
  type: string;
  amount: number;
  date: string;
}

const transactions = [
  { partyName: 'Siddhi', type: 'Credit', amount: 1000, date: Date.now() },
  { partyName: 'Raazi', type: 'Debit', amount: 1000, date: Date.now() },
  { partyName: 'Emmel', type: 'Credit', amount: 500, date: Date.now() },
  { partyName: 'Shipra', type: 'Debit', amount: 890, date: Date.now() },
  { partyName: 'Shinchan', type: 'Credit', amount: 100, date: Date.now() },
  { partyName: 'Shinigami', type: 'Debit', amount: 1000, date: Date.now() },
  { partyName: 'Shimal', type: 'Credit', amount: 1000, date: Date.now() },
  { partyName: 'Vamsee', type: 'Credit', amount: 103, date: Date.now() },
  { partyName: 'Plate', type: 'Debit', amount: 125, date: Date.now() },
];

const options = { year: 'numeric', month: 'long', day: 'numeric' };

const transactionData: Transaction[] = transactions.map(
  (transaction, index) => {
    return {
      ...transaction,
      position: index + 1,
      date: new Date(transaction.date).toLocaleDateString('en-US'),
    };
  }
);
