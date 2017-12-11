import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Register } from '../pages/register/register';
import { Auth } from '../providers/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { SuccesPage } from '../pages/succes-page/succes-page';

export const firebaseConfig = {
  apiKey: "AIzaSyCRizLmUVXKQVLTIYoZ_fZckbCso-QtlMY",
  authDomain: "miracle-197a3.firebaseapp.com",
  databaseURL: "https://miracle-197a3.firebaseio.com",
  projectId: "miracle-197a3",
  storageBucket: "miracle-197a3.appspot.com",
  messagingSenderId: "687317299512"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Register,
    SuccesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Register,
    SuccesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Auth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
