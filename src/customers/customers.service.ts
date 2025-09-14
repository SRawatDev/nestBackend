import { Injectable } from '@nestjs/common';
import customerInterface from './interface/customer.interface';
import createCustomerDto from './dto/create-customer.dto';

@Injectable()
export class CustomersService {
    private customer:customerInterface[]=[]
    createCustomer(customer:createCustomerDto){
        console.log("hiiii",customer)
            this.customer.push({
                id:this.customer.length>0?Number(this.customer[this.customer.length-1].id+1):0,
                ...customer
            })
            return this.customer
    }
}
