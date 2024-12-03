import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  
  @Get('sacramento')
  async getSacramentoData(): Promise<Record<string, unknown>> {
    return await this.appService.getSacramentoData();
  }
}
