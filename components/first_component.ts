import { Component, ILogger, IConfigReader } from 'merapi';

export default class FirstComponent extends Component {
	constructor(
		private logger: ILogger,
        private config: IConfigReader,
        private secondComponent: any
        ) {
		super();

	}
	start(args: string[]) {
		this.logger.log(`${this.config('greeting')} ${args[2]} ${this.secondComponent.percobaanPertama(5, 2)}`);
    }
    
    public sakKarep(req: any, res: any): any {
        return res.json({"isi": "Halooo"});
    }

    public sakKarepDua(req: any, res: any): any{
        return res.json({"ini": "privat"});
    }

    public sakKarepTelu(): any{
        return "String biasa";
    }
}