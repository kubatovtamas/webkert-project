import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports: [
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule

  ],
  exports: [
    MatIconModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialComponentsModule {}
