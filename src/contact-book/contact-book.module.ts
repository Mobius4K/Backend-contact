import { Module } from '@nestjs/common';
import { ContactBookController } from './contact-book.controller';
import { ContactBookProviders } from './contact-book.providers';
import { ContactBookService } from './contact-book.service';

@Module({
  controllers: [ContactBookController],
  providers: [ContactBookService, ...ContactBookProviders],
})
export class ContactBookModule {}
