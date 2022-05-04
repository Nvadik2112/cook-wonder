import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactsModel } from './contacts.model';

@Controller('contacts')
export class ContactsController {
  @Post('create')
  async create(@Body() dto: ContactsModel) {}

  @Get()
  async get() {}

  @Delete()
  async delete() {}

  @Patch()
  async patch(@Body() dto: ContactsModel) {}

  @Post('createSocials')
  async setSocials(@Body() dto: Omit<ContactsModel['socialNetworks'], '_id'>) {}

  @Get('socials/:id')
  async getSocials(@Param('id') id: string) {}
}
