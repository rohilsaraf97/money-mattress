import { Component, OnInit } from '@angular/core';
import { NavbarItem } from 'src/types/NavbarItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarItems: NavbarItem[];
  constructor() {
    this.navbarItems = [
      {
        title: 'Home',
        href: 'home',
      },
      {
        title: 'Transfer',
        href: 'transfer',
      },
      {
        title: 'Logout',
        href: 'logout',
      },
    ];
  }

  ngOnInit(): void {}
}
