import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Course } from '@libs/db/models/course.model';
import { ReturnModelType } from '@typegoose/typegoose';
import { CourseDto } from './dto/Course.dto';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@Controller('courses')
@ApiTags('课程管理模块')
export class CoursesController {
  constructor(
    @InjectModel(Course) private courseModel: ReturnModelType<typeof Course>,
  ) {}

  @Get()
  @ApiOperation({ summary: '获取课程' })
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async getCourse() {
    return await this.courseModel.find();
  }

  @Post()
  @ApiOperation({ summary: '创建' })
  @ApiBearerAuth()
  async createCourse(@Body() courseDto: CourseDto) {
    return await this.courseModel.create(courseDto);
  }
}
