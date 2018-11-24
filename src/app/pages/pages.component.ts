import { Component } from '@angular/core';
import {RoleCheck} from "../@core/services/auth.guard";

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  constructor(
    private roleCheck: RoleCheck
  ) {

  }

  menu = [{
    title: 'Zápasy',
    icon: 'nb-compose',
    children: [
      {
        title: 'Zápasy',
        link: '/pages/matches'
      },
      {
        title: 'Zapisování výsledků',
        link: '/pages/matches-results'
      }],
    }, {
    title: 'Admin',
    icon: 'nb-gear',
    hidden: !this.roleCheck.isAdmin(),
    children: [
      {
        title: 'Uživatelé',
        link: '/pages/admin/registration-requests',
      },
      {
        title: 'Dresy',
        link: '/pages/admin/jersey',
      },
      {
        title: 'Místa',
        link: '/pages/admin/places',
      }
    ]
  }, {
      title: 'User',
      link: '/pages/user/profile',
      icon: 'nb-person'
  }];
}
