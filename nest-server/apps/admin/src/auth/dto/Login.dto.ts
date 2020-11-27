import { prop } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
//增加登录dto
export class LoginDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
