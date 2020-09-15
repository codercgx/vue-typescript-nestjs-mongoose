import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DbModule } from '@libs/db';
import { CommonModule } from 'libs/common/src';
import { CoursesModule } from './courses/courses.module';
import { SectionsModule } from './sections/sections.module';
import { ActionsModule } from './actions/actions.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads'
    }),
    AuthModule, CommonModule, CoursesModule, SectionsModule, ActionsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
