import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LayoutsplitpanePage } from './layoutsplitpane.page';

const routes: Routes = [
  {
    path: '',
    component: LayoutsplitpanePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutsplitpanePage]
})
export class LayoutsplitpanePageModule {}
