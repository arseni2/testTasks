import {Controller, Post} from '@nestjs/common';
import {AppService} from "./app.service";

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService
	) {
	}

	@Post('problems')
	async resetProblems(): Promise<{ count: number }> {
		const count = await this.appService.SetTrueAndCountProblems()
		return { count };
	}
}
