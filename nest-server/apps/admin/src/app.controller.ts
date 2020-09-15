import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    console.log(file);
    //  const path='../../../uploads'
    //   const files = fs.readdirSync(path)
    //   files.filter((item)=>{
    //     return item===
    //   })
    // fs.rename()
    return {
      url: `http://localhost:3000/uploads/${file.filename}`,
    };
  }
}
