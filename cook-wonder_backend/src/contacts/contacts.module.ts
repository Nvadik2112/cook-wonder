import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactsModel } from './contacts.model';
import { ContactsService } from './contacts.service';

@Module({
  controllers: [ContactsController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ContactsModel,
        schemaOptions: {
          collection: 'Contact',
        },
      },
    ]),
  ],
  providers: [ContactsService],
})
export class ContactsModule {}
