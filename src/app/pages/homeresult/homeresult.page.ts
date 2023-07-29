import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-homeresult',
  templateUrl: './homeresult.page.html',
  styleUrls: ['./homeresult.page.scss'],
})
export class HomeresultPage implements OnInit {
  title : any;
  description : any;
  sender : any;
  datastr: any;

  constructor(public ar : ActivatedRoute) { }

  print = (str: any) => console.log(str)

  ngOnInit() {
    /*
    this.title = this.ar.snapshot.paramMap.get('title');
    this.description = this.ar.snapshot.paramMap.get('description');
    this.sender = this.ar.snapshot.paramMap.get('sender');
    */
  this.datastr = this.ar.snapshot.paramMap.get('dataobj');
  let dataFromJSON = JSON.parse(this.datastr);
  this.title = dataFromJSON.get_title;
  this.description = dataFromJSON.get_description;
  this.sender = dataFromJSON.get_sender;
  this.print(this.title);



  }

}
