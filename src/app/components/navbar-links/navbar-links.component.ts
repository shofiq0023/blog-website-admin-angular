import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar-links',
  templateUrl: './navbar-links.component.html',
  styleUrls: ['./navbar-links.component.scss']
})
export class NavbarLinksComponent {
  public links: any[] = [
    {
      name: "Dashboard",
      routerLink: "dashboard",
      listIcon: "dashboard"
    },
  ]

  public blogLinks: any[] = [
    {
      name: "Blogs List",
      routerLink: "blogs-list",
      listIcon: "list_alt"
    },
    {
      name: "Create Blog",
      routerLink: "create-blog",
      listIcon: "post_add"
    }
  ]

  public userLinks: any[] = [
    {
      name: "Users List",
      routerLink: "users-list",
      listIcon: "group"
    },
    {
      name: "Add user",
      routerLink: "add-user",
      listIcon: "person_add"
    }
  ]
}
