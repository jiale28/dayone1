import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  name: any;
  nickname: any;
  age: any;

  constructor(private router: Router, private alertController: AlertController) {}

  async presentAlertConfirm(form){
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure to submit this form?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Confirm Cancel');

          }
        }, {
          text: 'Okay',
          handler: () => {
            this.submit(form)
          }
        }
      ]
    });
    await alert.present();
  }

  submit(form: NgForm){

    this.name = form.value.name;
    this.nickname = form.value.nickname;
    this.age = form.value.age;
    console.log("Name ",this.name);
    console.log("Nickname ",this.nickname);
    console.log("Age ",this.age);

    let navigationExtras: NavigationExtras ={
      state: {
        name: this.name,
        nickname: this.nickname,
        age: this.age
      }

    };
    this.router.navigate(['about'], navigationExtras);
  }
}


   