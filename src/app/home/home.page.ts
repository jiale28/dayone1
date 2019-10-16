import { Component } from '@angular/core';
import { Router,Route,NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router,private route: Route,private navigate: NavigationExtras) {}

  submit(){

    console.log("Button Ok")

    this.router.navigate(['about']);
  }
}
