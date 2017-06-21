import { BookmarksService } from './bookmarks.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveBookmarkComponent } from './remove-bookmark/remove-bookmark.component';
import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [RemoveBookmarkComponent, AddBookmarkComponent],
  providers: [BookmarksService],
  exports: [AddBookmarkComponent, RemoveBookmarkComponent]
})
export class BookmarksModule { }
