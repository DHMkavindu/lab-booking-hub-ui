import { Component } from '@angular/core';
import { menuList } from './menu-list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  currentSelectedDirection!: string;
  sideMenu = menuList;
  collapse = false;

  constructor(private router: Router) {}


  ngOnInit(): void {
  }

  toggleSidebar() {
    this.collapse = !this.collapse;
  }
  navigateHandler(direction: string) {
    this.router.navigate([`${direction}`]);
    this.currentSelectedDirection = direction;
  }
}
