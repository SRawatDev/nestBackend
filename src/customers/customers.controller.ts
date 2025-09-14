import { Body, Controller, Post,HttpCode,HttpStatus } from '@nestjs/common';
import { CustomersService } from './customers.service';
import createCustomerDto from './dto/create-customer.dto';
@Controller('customers')
export class CustomersController {
    constructor(private readonly customerService:CustomersService){}
    @Post("add")
     @HttpCode(HttpStatus.OK)
    addCustomer(@Body() body:createCustomerDto,){
        const data=this.customerService.createCustomer(body)
        return {data:data,message:"customer added sucessdully",statusCode:HttpStatus.OK}
    }
}
