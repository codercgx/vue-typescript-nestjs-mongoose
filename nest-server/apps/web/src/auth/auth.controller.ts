import {
  Controller,
  Post,
  Body,
  UseGuards,
  BadRequestException,
  Get,
} from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User, UserDocument } from '@libs/db/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { LoginDto } from './dto/Login.dto';
import { RegisterDto } from './dto/Register.dto';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { CurrentUser } from './current-user.decorator';

@Controller('auth')
@ApiTags('用户')
export class AuthController {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User) private readonly userModer: ReturnModelType<typeof User>,
  ) {}

  @Post('register')
  @ApiOperation({ summary: '用户注册模块' })
  async register(@Body() userDto: RegisterDto) {
    const { username } = userDto;
    if (await this.userModer.findOne({ username })) {
      throw new BadRequestException('用户名重复!');
    } else {
      return await this.userModer.create(userDto);
    }
  }

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiOperation({ summary: '用户登陆模块' })
  async login(@Body() userDto: LoginDto, @CurrentUser() user: UserDocument) {
    return {
      token: this.jwtService.sign(String(user._id)),
      user: await this.user(user),
    };
  }

  @Get('user')
  @ApiOperation({ summary: '用户信息模块' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  async user(@CurrentUser() user) {
    return user;
  }
}
