import { Module } from '@nestjs/common';
import { ContactsController } from './contacts.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { ContactsModel } from './contacts.model';

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
})
export class ContactsModule {}
