import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Page1 } from '../page1/page1'

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  
  public editText: String = "";
  callback: any;
  name: String = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.name = navParams.get('nome');
    this.callback = navParams.get('callback');
    this.editText = this.name;
  }

  btnClickCancela() {
    this.voltaPag1(this.name);
  }

  btnClickConfirma(){
    this.voltaPag1(this.editText);
  }

  voltaPag1(nome){
    this.callback(nome);
    this.navCtrl.pop();
  }

}
