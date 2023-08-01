import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { CategoryPipe } from './pipes/category.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    ConfirmationDialogComponent,
  ],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [
    ErrorDialogComponent,
    MatButtonModule,
    CategoryPipe,
    ConfirmationDialogComponent,
  ],
})
export class SharedModule {}
