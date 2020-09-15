import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
