import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { Role } from 'src/guards/roles/roles.enum';
import { RolesGuard } from 'src/guards/roles/roles.guard';

@Controller('user-role')
export class UserRoleController {


    @Get("roles")
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)  
    getuserRole(){
        return "you can access user role"
    }
}
