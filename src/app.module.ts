import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { EmployeeModule } from './employee/employee.module';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { CustomersModule } from './customers/customers.module';

@Module({
  imports: [EmployeeModule, StudentModule, CustomersModule],
  controllers: [AppController, UserController, ProductController, StudentController],
  providers: [AppService, ProductService, StudentService],
})
export class AppModule {}
