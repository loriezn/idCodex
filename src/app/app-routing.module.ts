import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { LoginComponent } from './_components/login/login.component';
import { CodexComponent } from './_components/codex/codex.component';
import { HomeComponent } from './_components/home/home.component';
import { AboutComponent } from './_components/about/about.component';
import { ContactComponent } from './_components/contact/contact.component';
import { FileUploadComponent } from './_components/file-upload/file-upload.component';
import { ProfileComponent } from './_components/profile/profile.component';

import { LoggedInGuard } from 'ngx-auth-firebaseui';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'codex', component: CodexComponent },
  { path: 'codex/:id', component: ProfileComponent },
  { path: 'files', pathMatch: 'full', component: FileUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
