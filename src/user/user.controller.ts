import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    getuser(){        
        return "you requesting get request";

    }

}
