import { prop, Ref } from '@typegoose/typegoose';
import { User } from './user.model';
import { Course } from './course.model';
import { Section } from './section.model';
import { Good } from './good.moadl';

export class Action {
  @prop({ ref: () => User })
  user: Ref<User>;

  @prop({ enum: ['Course', 'Section', 'Good'] })
  type: string;

  @prop({ refPath: 'type' })
  object: Ref<Course | Section | Good>;

  @prop({ enum: ['like', 'fav'] })
  name: string;
}
