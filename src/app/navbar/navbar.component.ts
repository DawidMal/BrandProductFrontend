import { Component } from '@angular/core';
import {  OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  title = 'my-app';
  showNavbar: boolean = true;
  isLoggedIn: boolean = false; 
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showNavbar = !['/login', '/register'].includes(event.url);
      }
    });
  }

}
