// Angular Libraries
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Routing
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// RxJS State Storage
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Directives
import { DropZoneDirective } from './_directives/drop-zone.directive';

// Modules
import { FirebaseModule } from './_modules/firebase.module';
import { FontModule } from './_modules/font.module';
import { MaterialModule } from './_modules/material.module';

// Pipes
import { FirestoreDatePipe } from './_pipes/date-format.pipe';
import { FileSizePipe } from './_pipes/file-size.pipe';

// Services
import { FirestoreService } from './_service/firestore.service';

// Guards
// import { AuthGuard } from './_guard/auth.guard';

// Environment Config
import { environment } from '../environments/environment';

// Main Application Entry Point
import { AppComponent } from './app.component';

// Components
import { NavbarComponent } from './_components/navbar/navbar.component';
import { LoginComponent } from './_components/login/login.component';
import { CodexComponent } from './_components/codex/codex.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { FileUploadComponent } from './_components/file-upload/file-upload.component';


@NgModule({
  declarations: [
    DropZoneDirective,
    AppComponent,
    NavbarComponent,
    LoginComponent,
    CodexComponent,
    FirestoreDatePipe,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    FileUploadComponent,
    FileSizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FirebaseModule,
    FontModule,
    MaterialModule,
  ],
  providers: [
    FirestoreService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
