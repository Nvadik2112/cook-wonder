import {
  Body,
  Controller,
  Delete,
  Get, HttpCode, HttpException, HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContactsModel } from './contacts.model';
import { CreateSocialsDto } from './dto/create-socials';
import { ContactsService } from './contacts.service';
import {SOCIAL_NOT_FOUND} from './contacts.constants';

@Controller('contacts')
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {
  }

  @Post('create')
  async create(@Body() dto: ContactsModel) {}

  @Get()
  async get() {}

  @Delete()
  async delete() {}

  @Patch()
  async patch(@Body() dto: ContactsModel) {}

  @Post('createSocials')
  async setSocial(@Body() dto: CreateSocialsDto) {
    await this.contactsService.setSocial(dto);
  }

  @Get('socials/:id')
  async getSocial(@Param('id') id: string) {
    await this.contactsService.getSocial(id);
  }

  @Delete('socials/:id')
  async deleteSocial(@Param('id') id: string) {
    const deleted = await this.contactsService.deleteSocial(id);

    if (!deleted) {
      throw new HttpException(SOCIAL_NOT_FOUND, HttpStatus.NOT_FOUND);
    }
  }
}
