import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

// Angular Firebase
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import * as firebase from 'firebase';

// Pipes & Services
import { FirestoreService } from '../../_service/firestore.service';
import { FirestoreDatePipe } from '../../_pipes/date-format.pipe';

// Modules
import { MaterialModule } from '../../_modules/material.module';
import { FontModule } from '../../_modules/font.module';
import { FirebaseModule } from '../../_modules/firebase.module';

// Data store Model
import { Profile } from '../../_interfaces/profile';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  ref: AngularFirestoreCollection<Profile>;
  p: Observable<Profile[]>;

  constructor(
    public db: FirestoreService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
        this.p = this.db.col$('profiles');
  }

}
