import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatButtonModule,
    Material.MatCheckboxModule
  ]
})
export class MaterialModule { }
