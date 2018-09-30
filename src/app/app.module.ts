import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { FacultyLoginPage } from '../pages/login-faculty/login-faculty';
import { StudentLoginPage } from '../pages/login-student/login-student';
import { ClassSubjectPage } from '../pages/class-subject/class-subject';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
  //  ItemDetailsPage,
    FacultyLoginPage,
    StudentLoginPage,
    ClassSubjectPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
  //  ItemDetailsPage,
    FacultyLoginPage,
    StudentLoginPage,
    ClassSubjectPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner
  ]
})
export class AppModule {}
