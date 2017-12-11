import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Register } from '../register/register';
import { Auth } from '../../providers/auth';
import { SuccesPage } from '../succes-page/succes-page';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public auth:Auth) {

  } 
  register() {
        this.navCtrl.push(Register);    
  }

  login(uname:string,pass:string){
    
        let credentials={
          "email":uname,
          "password":pass
        }
        this.auth.login(credentials)
        .then((data) => {
          console.log(data);
          this.navCtrl.setRoot(SuccesPage);
        });
      }
 
}
