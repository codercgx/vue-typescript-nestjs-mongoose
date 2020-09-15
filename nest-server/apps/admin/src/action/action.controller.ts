import { Controller, Get, Query, Post, Body, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { CurrentUser } from 'apps/web/src/auth/current-user.decorator';
import { UserDocument } from '@libs/db/models/user.model';
import { Action } from '@libs/db/models/action.model';
import { ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('action')
export class ActionController {
  constructor(
    @InjectModel(Action) private actionModel: ReturnModelType<typeof Action>,
  ) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('status')
  async getStatus(@Query() query, @CurrentUser() user) {
    // const param = JSON.parse(query);
    query.user = user._id;
    let doc: number = await this.actionModel.countDocuments();
    return {
      status: doc > 0,
    };
  }

  @Post('toggle')
  @UseGuards(AuthGuard('jwt'))
  async toggle(@Body() dto, @CurrentUser() user: UserDocument) {
    dto.user = user._id;
    const doc = await this.actionModel.findOne();
    if (doc) {
      await this.actionModel.deleteMany({});
    } else {
      await this.actionModel.create(dto);
    }
    return {
      status: await this.getStatus(dto, user),
    };
  }
}
