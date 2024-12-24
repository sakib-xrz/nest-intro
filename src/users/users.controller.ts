import { Body, Controller, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  create(@Body() payload: any) {
    console.log(payload);

    return 'This action adds a new cat';
  }
}
