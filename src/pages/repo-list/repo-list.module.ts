import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepoListPage } from './repo-list';

@NgModule({
  declarations: [
    RepoListPage,
  ],
  imports: [
    IonicPageModule.forChild(RepoListPage),
  ],
  exports: [
    RepoListPage
  ]
})
export class RepoListPageModule {}
