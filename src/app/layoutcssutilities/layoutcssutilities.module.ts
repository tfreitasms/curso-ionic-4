import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutcssutilitiesPage } from './layoutcssutilities.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutcssutilitiesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutcssutilitiesPage]
})
export class LayoutcssutilitiesPageModule {}
