import { Component, OnInit, Inject } from '@angular/core';
import { CrudService, CustomerData } from './homedb.service';
import { AlertController, ModalController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-homedb',
  templateUrl: './homedb.page.html',
  styleUrls: ['./homedb.page.scss'],
})
export class HomedbPage implements OnInit {
  datalist: any;
  constructor(
    private dataService: CrudService,
    private cd: ChangeDetectorRef,
    private alertCtrl: AlertController,
  ) {}

  ngOnInit() {
    this.dataService.loadAllData().subscribe(res => {
      this.datalist = res;
      this.cd.detectChanges();
    });
  }

  ShowCreateData = async () => {
    let alert = this.alertCtrl.create({
      header: 'Create Data',
      subHeader: 'Create Object to Firebase',
      inputs: [
        {
          name: 'fullname',
          placeholder: 'Full Name',
        },
        {
          name: 'price',
          placeholder: 'Price',
          type: 'number',
        },
        {
          name: 'postpaid',
          placeholder: 'true or false',
        },
        {
          name: 'telno',
          placeholder: 'Phone Number',
        },

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancel clicked')
        },
        {
          text: 'Create',
          handler: data => {
            this.dataService.addData(data);
          }
        }
      ]
    });
    (await alert).present();
  }
  ShowEditData = async (Id: String, item: CustomerData) => {
    let alert = this.alertCtrl.create({
      header: 'Edit Data',
      subHeader: 'edit data from Firebase',
      inputs: [
        {
          name: 'fullname',
          placeholder: 'Full Name',
          value: item.fullname
        },
        {
          name: 'price',
          placeholder: 'Price',
          type: 'number',
          value: item.price
        },
        {
          name: 'postpaid',
          placeholder: 'true or false',
          value: item.postpaid
        },
        {
          name: 'telno',
          placeholder: 'Phone Number',
          value: item.telno
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => console.log('Cancel clicked')
        },
        {
          text: 'Update',
          handler: data => {
            this.dataService.updateData(Id, data);
          }
        }
      ]
    });
    (await alert).present();
  }

  DeleteData = async (Id: String) => {
    let alert = this.alertCtrl.create({
      header: 'ยืนยันการลบ',
      message: 'คุณต้องการลบใช่หรือไม่',
      buttons: [
        {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'ใช่',
          handler: () => {
            this.dataService.deleteData(Id);
          }
        }
      ]
    });
    (await alert).present();
  }

}
