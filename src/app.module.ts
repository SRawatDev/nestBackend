import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { UserRoleController } from './user-role/user-role.controller';
import { ExceptionController } from './exception/exception.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { DatabaseController } from './database/database.controller';
import { DatabaseService } from './database/database.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [EmployeeModule, StudentModule, CustomersModule,ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController, UserController, ProductController, StudentController, UserRoleController, ExceptionController, DatabaseController],
  providers: [AppService, ProductService, StudentService, DatabaseService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
