/* Required data format as a blueprint
1-{ 
    key:value pairs
   2- "data": {
        "active_cryptocurrencies": 1628, 
        "active_markets": 11345, 
        "bitcoin_percentage_of_market_cap": 40.29, 
        3-"quotes": {
          4-  "USD": {
                "total_market_cap": 276429715350.0, 
                "total_volume_24h": 15641206166.0
            }
        }, 
        "last_updated": 1528897174
    }, 
    "metadata": {
        "timestamp": 1528896929, 
        "error": null
    }
}


*/

export class Bitcoin {
   public bitcoin_percentage_of_market_cap: number;
   public active_cryptocurrencies: number;
   public total_volume_usd: number;
   public active_markets: number;
   public total_market_cap_available_supply_usd: number;

   constructor(data?: any) {
    //    here we are implementing the upper blueprint
    /*
    1- default={
        key:valuepairs
        2-data:{ values...
            ...
            key:value
            quotes:{
              key: value
              USD: value   
            }
        }
    }

    now we need to map this object to properties/variables:
    defaults.data.bitcoin_percentage_of_market_cap;
    defaults.data.quotes.USD.total_volume_24h;
     */
       const defaults = {
            data: {
                quotes: {
                    USD: {}
                }
            },    
        // now we are getting all data from the http API with spread operator ...data
        ...data
       };

      
      
       this.bitcoin_percentage_of_market_cap = defaults.data.bitcoin_percentage_of_market_cap;

       this.active_cryptocurrencies = defaults.data.active_cryptocurrencies;

       this.total_volume_usd = defaults.data.quotes.USD.total_volume_24h;
       
       this.active_markets = defaults.data.active_markets;

       this.total_market_cap_available_supply_usd = defaults.data.quotes.USD.total_market_cap;
   }

}
