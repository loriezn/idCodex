import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

import { environment } from '../../environments/environment';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'idCodex'),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule.forRoot(environment.firebaseConfig)
  ],
  exports: [
    AngularFireModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgxAuthFirebaseUIModule,
  ]
})
export class FirebaseModule { }
