import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Blog } from './models/blog.model';
import { Category } from './models/category.model';
import { User } from './models/user.model';
import { Course } from './models/course.model';
import { Section } from './models/section.model';
import {Action } from './models/action.model';
import { Good } from './models/good.moadl';

const models = TypegooseModule.forFeature([
  Blog,
  Category,
  User,
  Course,
  Section,
  Action,
  Good
]);
@Global()
@Module({
  imports: [
    // TypegooseModule.forRoot('mongodb://localhost/nest-api', {
    //   useCreateIndex: true,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // }),
    TypegooseModule.forRootAsync({
      useFactory() {
        return {
          uri: process.env.DB,
          useCreateIndex: true,
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useFindAndModify: false,
        };
      },
    }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
