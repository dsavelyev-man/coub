import {Controller, Post} from '@nestjs/common';

@Controller('auth')
export class AuthController {
    @Post()
    accesTokenGet() {
        return "tes"
    }
}
