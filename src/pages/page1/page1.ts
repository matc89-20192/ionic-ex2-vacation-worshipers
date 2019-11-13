import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public texto: String = "Oi, Fulano!";

  constructor(public navCtrl: NavController) {

  }

  buttonClick(){
    let s: String;
    if(this.texto[2] === ',')
    {
      s = this.texto.substring(4,this.texto.length-1);
    }
    else
    {
      s = "";
    }
    this.navCtrl.push('Page2', {
      nome: s,
      'callback': this.retornaPag2.bind(this)
    });
  }

  retornaPag2(dados){
    if(dados === "")
    {
      this.texto = "Oi!";
    }
    else
    {
      this.texto = "Oi, " + dados + "!";
    }
  }
}
