import { NgModule } from '@angular/core';
import {
  MatBadgeModule,
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatIconModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSortModule,
  MatToolbarModule,
  MatTableModule
} from '@angular/material';

import { MatContactsModule } from '@angular-material-extensions/contacts';
import { MatLayoutModule } from '@angular-material-extensions/layout';
import { MatPasswordStrengthModule } from '@angular-material-extensions/password-strength';
import { MatFaqModule } from '@angular-material-extensions/faq';

@NgModule({
  imports: [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatContactsModule,
    MatFaqModule,
    MatGridListModule,
    MatIconModule,
    MatLayoutModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatPasswordStrengthModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  exports: [
    MatBadgeModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatContactsModule,
    MatFaqModule,
    MatGridListModule,
    MatIconModule,
    MatLayoutModule,
    MatListModule,
    MatMenuModule,
    MatPaginatorModule,
    MatPasswordStrengthModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
