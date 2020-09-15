import { ApiProperty } from '@nestjs/swagger';

export class CourseDto {
  @ApiProperty({ description: '课程名称' })
  name: string;

  @ApiProperty({ description: '课程封面' })
  cover: string;

  @ApiProperty({ description: '课时' })
  sections: string;
}
