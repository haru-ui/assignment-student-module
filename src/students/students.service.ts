import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentsRepository: Repository<Student>,
  ) {}

  create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentsRepository.create(createStudentDto);
    return this.studentsRepository.save(student);
  }

  findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  findOne(id: number): Promise<Student> {
    return this.studentsRepository.findOneBy({ id });
  }
  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    await this.studentsRepository.update(id, updateStudentDto);
    return this.studentsRepository.findOneBy({ id });
  }
}
