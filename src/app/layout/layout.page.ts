import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage implements OnInit {

  constructor(private navCtrl : NavController) { }

  ngOnInit() {
  }

  abrirPaginaLayoutHeaderFooter() {
    this.navCtrl.navigateRoot('layoutheaderfooter');
  }

  abrirPaginaLayoutTabs() {
    this.navCtrl.navigateRoot('layouttabs');
  }

  abrirPaginaLayoutMenu() {
    this.navCtrl.navigateRoot('layoutmenu');
  }

  abrirPaginaLayoutSplitPane() {
    this.navCtrl.navigateRoot('layoutsplitpane');
  }

  abrirPaginaLayoutGrid() {
    this.navCtrl.navigateRoot('layoutgrid');
  }

  abrirPaginaLayoutCssUtilities() {
    this.navCtrl.navigateRoot('layoutcssutilities');
  }

  

}
