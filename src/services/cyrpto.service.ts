import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class CryptoService {

    constructor(public http: HttpClient) {

    }

    public getBitcoinMarketCap() {

        
        return this.http.get('https://api.coinmarketcap.com/v2/global/');
    }

    public getallcrpto() {
        return this.http.get('https://api.coinmarketcap.com/v2/ticker/');
    }

}
