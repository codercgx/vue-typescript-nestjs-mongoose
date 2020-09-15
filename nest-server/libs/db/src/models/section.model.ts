import { prop, Ref } from '@typegoose/typegoose';
import { Course } from './course.model';

export class Section {
  @prop()
  name: string;
  @prop()
  file: string;
  @prop({ ref: () => Course })
  course: Ref<Course>;
}
