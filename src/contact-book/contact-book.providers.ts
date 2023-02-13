import { ContactBook } from './contact-book.entity';

export const ContactBookProviders = [
  {
    provide: 'CONTACTBOOK_REPOSITORY',
    useValue: ContactBook,
  },
];
