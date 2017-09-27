import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ICategory } from '../../model/category';
import { CategoryService } from '../../providers/category-service';
import { DetailpagePage } from '../detailpage/detailpage';

/**
 * Generated class for the PassdataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-passdata',
  templateUrl: 'passdata.html',
})
export class PassdataPage {
  categories: ICategory[];
    rows: any;
    cat: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  private catSerivce: CategoryService) {
  }

  ionViewDidLoad() {
     this.catSerivce.getCategories()
       .subscribe(categories => {
         this.categories = categories
         this.rows = Array.from(Array(Math.ceil(categories.length / 3)).keys());
       },
       error => console.log(error));
   }
   ImageTapped(cat)
   {
     console.log("cat",cat)

   }

   tapEvent(event,category) {
     console.log("i",category.icon);
     this.navCtrl.push(DetailpagePage, {
     thing1: category.name,
     thing2: category.icon,
     thing3: category.info,

 });
   }
}
