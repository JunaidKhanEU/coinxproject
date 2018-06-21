export class CryptoCurrency {
    public id: string; 
    public name: string;
    public symbol: string;
    public rank: number;
    public circulating_supply: number;
    public total_supply: number;
    public max_supply: number;
    public volume_24h: number;
    public market_cap: number;
    public percent_change_1h: number;
    public percent_change_24h: number;
    public price: number;
    public percent_change_7d: number;
    public last_updated: Date;

    constructor(data?: any) {

        const defaults: any = {

            ...data
        };

        this.id = defaults.id;
        this.name = defaults.name;
        this.symbol = defaults.symbol;
        this.rank = Number(defaults.rank);
        this.circulating_supply = Number(defaults.circulating_supply);
        this.total_supply = Number(defaults.total_supply);
        this.max_supply = Number(defaults.max_supply);
        this.volume_24h = Number(defaults.volume_24h);
        this.market_cap = Number(defaults.market_cap);
        this.percent_change_1h = Number(defaults.percent_change_1h);
        this.percent_change_24h = Number(defaults.percent_change_24h);
        this.price = Number(defaults.price);
        this.percent_change_7d = Number(defaults.percent_change_7d);
        this.last_updated = new Date (Number(defaults.last_updated));


    }
    



}
