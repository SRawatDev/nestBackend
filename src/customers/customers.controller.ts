import { Body, Controller, Post,HttpCode,HttpStatus, UseGuards } from '@nestjs/common';
import { CustomersService } from './customers.service';
import createCustomerDto from './dto/create-customer.dto';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';
import { AuthGuard } from 'src/guards/auth/auth.guard';
@UseGuards(AuthGuard)
@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService:CustomersService){}
    @Post("add")
     @HttpCode(HttpStatus.OK)
    addCustomer(@Body(new UppercasePipe()) body:createCustomerDto,){
        const data=this.customerService.createCustomer(body)
        return {data:data,message:"customer added sucessdully",statusCode:HttpStatus.OK}
    }
}
