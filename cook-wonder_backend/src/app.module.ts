import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuideModule } from './guide/guide.module';
import { MainModule } from './main/main.module';
import { ContactsModule } from './contacts/contacts.module';
import { GuideContentModule } from './guide-content/guide-content.module';
import { ProductsModule } from './products/products.module';
import { AuthModule } from './auth/auth.module';
import { GuideModule } from './guide/guide.module';

@Module({
  imports: [GuideModule, MainModule, ContactsModule, GuideContentModule, ProductsModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
