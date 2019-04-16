import { Component, OnInit } from '@angular/core';
import { Observable, Timestamp } from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FirestoreService } from './_service/firestore.service';
import * as firebase from 'firebase';
import { MaterialModule } from './_modules/material.module';
import { FontModule } from './_modules/font.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'idCodex';

  ngOnInit() {
  }
}

