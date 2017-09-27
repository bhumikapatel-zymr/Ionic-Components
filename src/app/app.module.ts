import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BasicPage } from '../pages/basic/basic';
import { SliderPage } from '../pages/slider/slider';
import { TabbarPage } from '../pages/tabbar/tabbar';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { ImagepickerPage } from '../pages/imagepicker/imagepicker';
import { SettingsPage } from '../pages/settings/settings';
import { DatabasePage } from '../pages/database/database';
import { Sqlite } from "../providers/sqlite";
import { UserdetailPage } from '../pages/userdetail/userdetail';
import { EdituserdetailPage } from '../pages/edituserdetail/edituserdetail';
import { DatePicker } from 'ionic2-date-picker/ionic2-date-picker';
import { PassdataPage } from '../pages/passdata/passdata';
import { ApidataPage } from '../pages/apidata/apidata';
import { DetailpagePage } from '../pages/detailpage/detailpage';
import { PostapidataPage } from '../pages/Postapidata/Postapidata';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { AddressbookPage } from '../pages/addressbook/addressbook';
import { LocalnotificationPage } from '../pages/localnotification/localnotification';
import { AudioplayerPage } from '../pages/audioplayer/audioplayer';
import { HealthkitPage } from '../pages/healthkit/healthkit';
import { HealthKit } from '@ionic-native/health-kit';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MappagePage } from '../pages/mappage/mappage';
import { Geolocation } from '@ionic-native/geolocation';
import {enableProdMode} from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';

import { CategoryService } from '../providers/category-service';
import { PeopleServiceProvider } from '../providers/people-service';

import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule} from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase';
import { IonicAudioModule, WebAudioProvider, CordovaMediaProvider, defaultAudioProviderFactory } from 'ionic-audio';

const firebaseConfig = {
    apiKey: "AIzaSyAcwE0whOZADueWjGU6nv2s_EB4J0SKT70",
    authDomain: "ionic-components-177512.firebaseapp.com",
    databaseURL: "https://ionic-components-177512.firebaseio.com",
    projectId: "ionic-components-177512",
    storageBucket: "ionic-components-177512.appspot.com",
    messagingSenderId: "421530495782"
  };
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BasicPage,
    SliderPage,
    TabbarPage,
    AboutPage,
    ContactPage,
    SettingsPage,
    ImagepickerPage,
    DatabasePage,
    UserdetailPage,
    EdituserdetailPage,
    DatePicker,
    PassdataPage,
    ApidataPage,
    DetailpagePage,
    PostapidataPage,
    ProgressBarComponent,
    AddressbookPage,
    MappagePage,
    LocalnotificationPage,
    AudioplayerPage,
    HealthkitPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicAudioModule.forRoot(defaultAudioProviderFactory),

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BasicPage,
    SliderPage,
    TabbarPage,
    AboutPage,
    ContactPage,
    SettingsPage,
    ImagepickerPage,
    DatabasePage,
    UserdetailPage,
    EdituserdetailPage,
    DatePicker,
    PassdataPage,
    ApidataPage,
    DetailpagePage,
    PostapidataPage,
    AddressbookPage,
    MappagePage,
    LocalnotificationPage,
    AudioplayerPage,
    HealthkitPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Sqlite,
    Geolocation,
    CategoryService,
    PeopleServiceProvider,
    CallNumber,
    LocalNotifications,
    FirebaseProvider,
    HealthKit

  ]
})
export class AppModule {}
