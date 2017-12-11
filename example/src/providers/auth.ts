import { Injectable } from '@angular/core';
import {  FirebaseApp } from 'angularfire2';
import * as firebase from 'firebase/app';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

import { Observable } from 'rxjs/Observable';

@Injectable() 
export class Auth {
 
  user: Observable<firebase.User>;
     
  constructor(afAuth: AngularFireAuth) {
    this.user = afAuth.authState;    
  }
  login(credentials: { email: string, password: string }) : Promise <any>{
    
   return firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password);
      }
      
  register(credentials: { email: string, password: string }) : Promise<any> {
       return  firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password);
      
  }
}
