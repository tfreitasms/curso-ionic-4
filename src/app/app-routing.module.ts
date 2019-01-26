import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'home',    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'instalacao', loadChildren: './instalacao/instalacao.module#InstalacaoPageModule' },
  { path: 'layout', loadChildren: './layout/layout.module#LayoutPageModule' },
  { path: 'layoutheaderfooter', loadChildren: './layoutheaderfooter/layoutheaderfooter.module#LayoutheaderfooterPageModule' },
  { path: 'layouttabs', loadChildren: './layouttabs/layouttabs.module#LayouttabsPageModule' },
  { path: 'layoutmenu', loadChildren: './layoutmenu/layoutmenu.module#LayoutmenuPageModule' },
  { path: 'layoutsplitpane', loadChildren: './layoutsplitpane/layoutsplitpane.module#LayoutsplitpanePageModule' },
  { path: 'layoutgrid', loadChildren: './layoutgrid/layoutgrid.module#LayoutgridPageModule' },
  { path: 'layoutcssutilities', loadChildren: './layoutcssutilities/layoutcssutilities.module#LayoutcssutilitiesPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
