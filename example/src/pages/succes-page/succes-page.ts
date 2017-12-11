import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';


/**
 * Generated class for the SuccesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-succes-page',
  templateUrl: 'succes-page.html',
})
export class SuccesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccesPage');
  }

  goBack(){
    this.navCtrl.push(HomePage);
  }


}
