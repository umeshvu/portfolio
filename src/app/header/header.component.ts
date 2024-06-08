import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  constructor(private _router: Router) { }

  routeToHome() {
    this._router.navigate(['home'])
  }

  routeToCode() {
    this._router.navigate(['code'])
  }

  routeToLens() {
    this._router.navigate(['lens'])
  }
}
