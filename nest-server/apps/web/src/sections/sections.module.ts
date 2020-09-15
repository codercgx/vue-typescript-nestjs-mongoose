import { Module } from '@nestjs/common';
import { SectionsController } from './sections.controller';

@Module({
  controllers: [SectionsController]
})
export class SectionsModule {}
