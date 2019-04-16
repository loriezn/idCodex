import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { MaterialModule } from '../../_modules/material.module';
import { FontModule } from '../../_modules/font.module';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirestoreService } from '../../_service/firestore.service';
import * as firebase from 'firebase';
import { FirestoreDatePipe } from '../../_pipes/date-format.pipe';


import {
  faUser,
  faUserPlus,
  faUserCircle
 } from '@fortawesome/free-solid-svg-icons';

import { Profile } from '../../_interfaces/profile';


@Component({
  selector: 'app-codex',
  templateUrl: './codex.component.html',
  styleUrls: ['./codex.component.scss']
})
export class CodexComponent implements OnInit {
  faUser = faUser;
  faUserPlus = faUserPlus;
  faUserCircle = faUserCircle;

  ref: AngularFirestoreCollection<Profile>;
  p: Observable<Profile[]>;

  constructor(public db: FirestoreService, private afs: AngularFirestore) {}

  ngOnInit() {
    this.p = this.db.col$('profiles');
  }
}
