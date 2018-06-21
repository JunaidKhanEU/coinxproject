import { Component } from '@angular/core';
import {CryptoService} from '../services/cyrpto.service';
import {Bitcoin} from '../models/bitcoin.class';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  public bitcoinClassData: Bitcoin = new Bitcoin();

 constructor(public crypto: CryptoService ) { 
  this.getBitcoinStats();
  
  
 }
 
 getBitcoinStats() {
   this.crypto.getBitcoinMarketCap().subscribe( (data: any) => {
    // console.log(data);
    this.bitcoinClassData = new Bitcoin(data);

    console.log(this.bitcoinClassData);
   });

 }
}
