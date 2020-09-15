import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';

@Module({
  controllers: [GoodsController]
})
export class GoodsModule {}
