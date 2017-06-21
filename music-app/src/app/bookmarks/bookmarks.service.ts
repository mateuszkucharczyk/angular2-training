import { Injectable } from '@angular/core';
import { Bookmark, BookmarkId } from './bookmarks.models'
import { remove } from 'lodash'

@Injectable()
export class BookmarksService {
  // remember to initialize it!
  private items: Bookmark[] = [];

  constructor() { }

  getAll(): Bookmark[] {
    return [...this.items]; // return copy
  }

  add(item: Bookmark): void {
    this.items.push(item);
  }

  remove(bookmarkId: BookmarkId): void {
    // filter return new array of items that match condition
    // this.items = this.items.filter(({id}) => id !== bookmarkId);

    // much easier and more readable to use lodash
    remove(this.items, { id: bookmarkId });
  }

  has(bookmarkId: BookmarkId): boolean {
    // !! "converts" to boolean - a bit tricky...
    // return !!this.items.find(({id}) => id === bookmarkId);

    // better...
    // return Boolean(this.items.find(({ id }) => id === bookmarkId));

    // the best! There is also 'every' version
    return this.items.some(({ id }) => id === bookmarkId);

    // .map -> 1:1
    // .filter -> get less elements
    // .reduce ->
    // .some / .every -> boolean check
    // .foreach -> side effect ie. do something for each item
  }
}
