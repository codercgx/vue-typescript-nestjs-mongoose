import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogsModule } from './blogs/blogs.module';
import { DbModule } from '@libs/db';
import { CategoriesModule } from './categories/categories.module';
import { UsersModule } from './users/users.module';
import { MulterModule } from '@nestjs/platform-express';
import { GoodsModule } from './goods/goods.module';
import { CommonModule } from '@app/common';
import { AuthModule } from 'apps/web/src/auth/auth.module';
import { ActionModule } from './action/action.module';

@Module({
  imports: [
    MulterModule.register({
      dest: 'uploads',
    }),
    BlogsModule,
    CommonModule,
    CategoriesModule,
    UsersModule,
    GoodsModule,
    AuthModule,
    ActionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
