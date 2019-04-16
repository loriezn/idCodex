import { Component, OnInit } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modules
import { FirebaseModule } from '../../_modules/firebase.module';
import { MaterialModule } from '../../_modules/material.module';
import { FontModule } from '../../_modules/font.module';

// NgX FirebaseUI Auth Module
import { AuthProvider, Theme } from 'ngx-auth-firebaseui';

// Font-Awesome Component Fonts
import {
  faPlusCircle,
  faUserAstronaut,
  faUserCircle,
  faIdCard,
  faCircle,
  faUserSecret,
  faFileUpload,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  providers = AuthProvider;
  themes = Theme;

  faUserCircle = faUserCircle;
  faUserAstronaut = faUserAstronaut;
  faIdCard = faIdCard;
  faPlusCircle = faPlusCircle;
  faCircle = faCircle;
  faUserSecret = faUserSecret;
  faFileUpload = faFileUpload;
  faCloudUploadAlt = faCloudUploadAlt;

  user: firebase.User;

  printUser(event) {
    console.log(event);
  }

  printError(event) {
    console.log(event);
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
