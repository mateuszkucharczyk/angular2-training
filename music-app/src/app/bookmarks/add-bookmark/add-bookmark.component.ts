import { Bookmark } from './../bookmarks.models';
import { BookmarksService } from './../bookmarks.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ma-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent implements OnInit {
  @Input() item: Bookmark;
  constructor(private bs: BookmarksService) { }

  ngOnInit() {
  }

  saveBookmark(show: Bookmark) {
    this.bs.add(show);
  }

  isBookmarked(item: Bookmark): boolean {
    return this.bs.has(item.id);
  }
}
