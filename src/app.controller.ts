import { Param, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('hello/:id')
  getHelloId(@Param('id') id) {
    return `The id is a: ${id}`;
  }  

}
