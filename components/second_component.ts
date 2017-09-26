import { Component, ILogger, IConfigReader } from 'merapi';

export default class SecondComponent extends Component {
	constructor(
		private logger: ILogger,
		private config: IConfigReader) {
		super();

    }
    
    public percobaanPertama(panjang: number, lebar: number): number {
        return panjang + lebar;
    }
 
    public guard(req: any, res: any, next: any): any {
        // res.send({"error" : "gak oleh pak"});
        next();
    }
}