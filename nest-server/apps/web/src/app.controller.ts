import {
  Controller,
  Get,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './auth/current-user.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('upload')
  @ApiOperation({ summary: '文件上传模块' })
  @UseInterceptors(FileInterceptor('file'))
  // @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async uploadFile(@UploadedFile() file, @CurrentUser() user) {
    return {
      url: `http://localhost:${process.env.SERVER_PORT}/uploads/${file.filename}`,
    };
  }
}
