import { Controller, Get, Param } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
    @Get(':name')
    getEmployee(@Param('name')name:string){
        return `${name} hey this is my name`

    }
}
