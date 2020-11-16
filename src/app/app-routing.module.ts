import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './main/main.component';
import {ResultComponent} from './result/result.component';
import {AccountComponent} from './account/account.component';

const routes: Routes = [
  {path: 'search', component: MainComponent},
  {path: 'result', component: ResultComponent},
  {path: 'account', component: AccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
