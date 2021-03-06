import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { IonicModule } from '@ionic/angular';

import { RecherchePageRoutingModule } from './recherche-routing.module';

import { RecherchePage } from './recherche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecherchePageRoutingModule,
     Ng2SearchPipeModule 
  ],
  declarations: [RecherchePage]
})
export class RecherchePageModule {}
