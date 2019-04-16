import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserCircle,
  faUserAstronaut,
  faIdCard,
  faPlusCircle,
  faCircle,
  faUser,
  faUserPlus,
  faUserSecret,
  faFileUpload,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [],
  imports: [
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
  ],
})
export class FontModule {
  constructor() {
    library.add(
      faUserCircle,
      faUserAstronaut,
      faPlusCircle,
      faIdCard,
      faUser,
      faUserPlus,
      faCircle,
      faUserSecret,
      faFileUpload,
      faCloudUploadAlt
    );
  }
}
