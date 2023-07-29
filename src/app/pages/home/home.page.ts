import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  title : any;
  description : any;
  sender : any;

  constructor(public navCtrl: NavController, public router : Router) {

  }

  ngOnInit() {

  }

  gotonext() {
    let dataobj = {
      get_title:this.title,
      get_description:this.description,
      get_sender:this.sender
    };
    let data = JSON.stringify(dataobj);
    this.router.navigate(['homeresult', data]);
  }

}
