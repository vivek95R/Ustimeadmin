import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { IndexComponent } from './index/index.component';
import { MerchantComponent } from './merchant/merchant.component'
const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'Index', component: IndexComponent,
    children: [
      { path: '', component: DashBoardComponent },
      { path: 'merchants', component: MerchantComponent }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
