import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { EducationListPage } from './education-list';

@NgModule({
  declarations: [
    EducationListPage,
  ],
  imports: [
    IonicPageModule.forChild(EducationListPage),
  ]
})
export class EducationPageListModule {}
