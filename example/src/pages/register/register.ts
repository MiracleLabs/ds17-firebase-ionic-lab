import { Component } from '@angular/core';
import { NavController, NavParams, Loading, AlertController } from 'ionic-angular';
import { Auth } from '../../providers/auth';
import { HomePage } from '../home/home';


/**
 * Generated class for the Register page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {

  loading: Loading;

  regResult;
  constructor(public navCtrl: NavController, public navParams: NavParams,public auth:Auth, public alertCtrl: AlertController){
  }
 

  ionViewDidLoad() {
    console.log('ionViewDidLoad Register');
  }
  register(uname:string,pass:string){
    let credentials={
      "email":uname,
      "password":pass
    }
    this.auth.register(credentials).then((data) => {
      console.log(data);
      this.navCtrl.push(HomePage);
    });
  }
}
