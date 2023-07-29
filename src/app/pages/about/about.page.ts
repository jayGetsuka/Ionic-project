import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  productlist: any;

  constructor(private alertCtrl: AlertController) {
    this.productlist = [
      {
        id: 1,
        productname: 'Milk',
        price: 35,
        icon: 'https://img.icons8.com/?size=512&id=36481&format=png'
      },
      {
        id: 2,
        productname: 'Bread',
        price: 20,
        icon: 'https://img.icons8.com/?size=512&id=16RjD9RQVCUf&format=png'
      },
      {
        id: 3,
        productname: 'Taco',
        price: 99,
        icon: 'https://img.icons8.com/?size=512&id=R0Oy1T3-yKJT&format=png'
      },

    ];
  }

  ngOnInit() {

  }

  ShowEdit = async (item: any) => {
    let alert = this.alertCtrl.create({
      header: 'Edit',
      subHeader: 'edit form for custom product',
      inputs: [
        {
          name: 'productName',
          placeholder: 'Product Name',
          value: item.productname
        },
        {
          name: 'price',
          placeholder: 'Price',
          value: item.price,
          type: 'number',
        }
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

            let dataobj = this.productlist[item.id -1];
            dataobj.productname = data.productName;
            dataobj.price = data.price;

          }
        }
      ]
    });
    (await alert).present();
  }

  DeleteProduct = async (item: any) => {
    let alert = this.alertCtrl.create({
      header: 'ยืนยันการลบ',
      message: 'คุณต้องการลบ ${item.productname} ใช่หรือไม่',
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
            this.productlist = this.productlist.filter(
              (
                (product: { id: any; }) => product.id !== item.id
              )
            );
          }
        }
      ]
    });
    (await alert).present();
  }
}
