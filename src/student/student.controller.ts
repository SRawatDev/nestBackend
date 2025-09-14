import { Body, Controller, Get, Post, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { StudentService } from './student.service';
@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) { }
    @Get("get")
    getStudent() {
        return this.studentService.getStudent()
    }
    @Post("add")
    postStudent(@Body() body: { name: string }) {
        return this.studentService.postStudent(body.name)
    }
    @Put("update")
    @HttpCode(HttpStatus.OK)
    updateStudent(@Body() body: { id: number, name: string }) {
        const data = this.studentService.updateStudent(body)
        return {data,message: "Student updated successfully",statusCode: HttpStatus.OK};
    }

}
