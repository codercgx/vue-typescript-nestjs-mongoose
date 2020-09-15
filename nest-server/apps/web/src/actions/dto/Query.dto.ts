import { ApiProperty } from '@nestjs/swagger';
import { mongoose } from '@typegoose/typegoose';

export class QueryDto {
  @ApiProperty()
  user: mongoose.Types.ObjectId;

  @ApiProperty()
  type: string;

  @ApiProperty()
  object: mongoose.Types.ObjectId;

  @ApiProperty()
  name: string;
}
