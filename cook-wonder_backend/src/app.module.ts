import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuideModule } from './guide/guide.module';
import { MainModule } from './main/main.module';
import { ContactsModule } from './contacts/contacts.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GuideModule, MainModule, ContactsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
