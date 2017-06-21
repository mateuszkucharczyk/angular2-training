import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component'
import { SearchComponent } from './spotify/search/search.component'
import { ContactComponent } from './contact/contact.component'
import { Page404Component } from './page-404/page-404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'spotify',
    component: SearchComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // {
  //   path: 'contact:id',
  //   component: ContactComponent
  // },
  {
    path: '**',
    component: Page404Component

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
