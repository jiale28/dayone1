import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  name: any;
  nickname: any;
  age: any;



  constructor(private Router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      if (this.Router.getCurrentNavigation().extras.state){
        this.name = this.Router.getCurrentNavigation().extras.state.name;
        this.nickname = this.Router.getCurrentNavigation().extras.state.nickname;
        this.age = this.Router.getCurrentNavigation().extras.state.age;

        console.log("Name ",this.name);
        console.log("Nickname ",this.nickname);
        console.log("Age ", this.age);
      }
    });
   }

  ngOnInit() {
  }

}
