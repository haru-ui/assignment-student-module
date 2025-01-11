import { Controller, Post, Body } from '@nestjs/common';
import { StudentsService } from './students.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './student.entity';

@Controller('students')
export class StudentsController {
  constructor(private readonly studentsService: StudentsService) {}

  @Post()
  create(@Body() createStudentDto: CreateStudentDto): Promise<Student> {
    return this.studentsService.create(createStudentDto);
  }
}
