import { ApiProperty } from '@nestjs/swagger';
import { mongoose } from '@typegoose/typegoose';

export class AddGood {
  @ApiProperty()
  category: mongoose.Types.ObjectId;
  @ApiProperty()
  name: string;
  @ApiProperty()
  desc: string;
  @ApiProperty()
  price: string;
  @ApiProperty()
  cover: string;
}
