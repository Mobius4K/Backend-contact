import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactBookController } from './contact-book/contact-book.controller';
import { ContactBookModule } from './contact-book/contact-book.module';
import { ContactBookService } from './contact-book/contact-book.service';
import { DatabaseModule } from './db/database.module';

@Module({
  imports: [DatabaseModule, ContactBookModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
