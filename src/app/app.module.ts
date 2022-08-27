import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarItemComponent } from './MyComponents/navbar-item/navbar-item.component';
import { NavbarComponent } from './MyComponents/navbar/navbar.component';
import { MaterialModule } from './material/material.module';
import { HeroComponent } from './MyComponents/hero/hero.component';
import { TransactionCardComponent } from './MyComponents/transaction-card/transaction-card.component';
import { TransactionsTableComponent } from './MyComponents/transactions-table/transactions-table.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { transactionReducer } from './state/transaction.reducer';
import { TransactionsFormComponent } from './MyComponents/transactions-form/transactions-form.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    NavbarItemComponent,
    NavbarComponent,
    HeroComponent,
    TransactionCardComponent,
    TransactionsTableComponent,
    FooterComponent,
    TransactionsFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({ balance: transactionReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
