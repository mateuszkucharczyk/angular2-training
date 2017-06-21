import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { SearchComponent } from './search/search.component';
import { PosterComponent } from './poster/poster.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule
  ],
  declarations: [SearchComponent, PosterComponent]
})
export class SpotifyModule { }
