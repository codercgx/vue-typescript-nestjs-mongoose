import { Controller, Post, Body, Get, Delete, Param } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Good } from '@libs/db/models/good.moadl';
import { AddGood } from './dto/AddGood.dto';

@Controller('goods')
export class GoodsController {
  constructor(
    @InjectModel(Good) private goodModel: ReturnModelType<typeof Good>,
  ) {}

  @Post()
  async createGood(@Body() goodDto: AddGood) {
    for (let i = 0; i < 10; i++) {
      await this.goodModel.create(goodDto);
    }
    return await this.goodModel.find();
  }

  @Get()
  async getGoods() {
    return await this.goodModel.find().populate('category');
  }

  @Delete(':id')
  async deleteGood(@Param('id') id: string) {
    return await this.goodModel.deleteOne({ _id: id });
  }

  @Get('init')
  async initGoods() {
    return await this.goodModel.deleteMany({});
  }
}
