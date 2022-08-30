import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu-mob',
  templateUrl: './nav-menu-mob.component.html',
  styleUrls: ['./nav-menu-mob.component.css'],
})
export class NavMenuMobComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  handlerTogleMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
