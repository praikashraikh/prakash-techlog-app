import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

const MENUITEMS = [
  { state: 'posts', name: 'Posts', type: 'link', icon: 'view_list' },
  { state: 'tags', name: 'Tags', type: 'link', icon: 'view_list' }
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
