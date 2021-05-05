import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  imports: [
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule
  ],
  exports: [
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class MaterialComponentsModule {}
