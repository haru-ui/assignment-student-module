import { Controller, Get, Post, Body, Param, Put, ParseIntPipe, HttpCode, HttpStatus, Delete  } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Student> {
    return this.studentsService.findOne(id);
  }
  
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStudentDto: UpdateStudentDto,
  ): Promise<Student> {
    return this.studentsService.update(id, updateStudentDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentsService.remove(+id);
  }
}