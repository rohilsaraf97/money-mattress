import { Component, Input, OnInit } from '@angular/core';
import { NavbarItem } from 'src/types/NavbarItem';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.css'],
})
export class NavbarItemComponent implements OnInit {
  @Input() navItem!: NavbarItem;

  constructor() {}

  ngOnInit(): void {}
}
