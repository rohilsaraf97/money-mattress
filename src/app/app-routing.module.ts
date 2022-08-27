import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { TransferComponent } from './screens/transfer/transfer.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'transfer', component: TransferComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [HomeComponent, TransferComponent];
