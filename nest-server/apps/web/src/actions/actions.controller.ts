import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { QueryDto } from './dto/query.dto';
import { ToggleDto } from './dto/toggle.dto';
import { CurrentUser } from '../auth/current-user.decorator';
import { UserDocument } from '@libs/db/models/user.model';
import { Action } from '@libs/db/models/action.model';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';

@Controller('actions')
@ApiTags('点赞收藏模块')
@ApiBearerAuth('jwt')
export class ActionsController {
  constructor(
    @InjectModel(Action) private actionModel: ReturnModelType<typeof Action>,
  ) {}

  @Get('status')
  @ApiOperation({ summary: '获取状态' })
  async getStatus(@Query() query: QueryDto, @CurrentUser() user: UserDocument) {
    query.user = user._id;
    const count = await this.actionModel.countDocuments();

    return {
      status: count > 0,
    };
  }

  @Post('toggle')
  @ApiOperation({ summary: '修改状态' })
  @ApiBearerAuth('jwt')
  async toggle(
    @Body() toggleDto: ToggleDto,
    @CurrentUser() user: UserDocument,
  ) {
    toggleDto.user = user._id;
    const item = await this.actionModel.findOne(toggleDto);
    if (item) {
      await this.actionModel.deleteMany({});
    } else {
      await this.actionModel.create(toggleDto);
    }
    return {
      status: await this.getStatus(toggleDto, user),
    };
  }
}
