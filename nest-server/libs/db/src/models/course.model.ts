import { prop, arrayProp } from '@typegoose/typegoose';
import { Section } from './section.model';

export class Course {
  @prop()
  name: string;
  @prop()
  cover: string;
  @arrayProp({ ref: () => Section })
  sections: string;
}
