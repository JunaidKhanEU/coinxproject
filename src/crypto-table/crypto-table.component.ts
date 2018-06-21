import { Component } from '@angular/core';
import { CryptoService } from './../services/cyrpto.service';
import { CryptoCurrency } from './../models/cryptocurrecy.class';

@Component({
    selector: 'app-crypto',
    templateUrl: './crypto-table.component.html',
    styleUrls: ['./crypto-table.component.scss']
  })

export class CryptoTableComponent {
    public crypto100Array: CryptoCurrency [];
    public mydata: any[];

    constructor(public cryp: CryptoService) {
        this.getallcurrecny();
        

    }

    public getallcurrecny(): void {

        this.cryp.getallcrpto().subscribe((data: any) => {

           
            // this.crypto100Array = data;
            // this.crypto100Array.map((element: any) => {
            //     console.log(element);
            //     return new CryptoCurrency(element); 
            // });

           this.mydata = Object.keys(data.data).map(i => data.data[i]);
            
            console.log( this.mydata);
            
        });
    }
}
