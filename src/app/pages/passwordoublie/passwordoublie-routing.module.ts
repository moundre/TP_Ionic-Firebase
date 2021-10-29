import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordoubliePage } from './passwordoublie.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordoubliePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordoubliePageRoutingModule {}
