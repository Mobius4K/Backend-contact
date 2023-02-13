import { Inject, Injectable } from '@nestjs/common';
import { ContactBook } from './contact-book.entity';

@Injectable()
export class ContactBookService {
  constructor(
    @Inject('CONTACTBOOK_REPOSITORY')
    private contactBookRepository: typeof ContactBook,
  ) {}

  async findAll(): Promise<ContactBook[]> {
    return await this.contactBookRepository.findAll<ContactBook>();
  }

  async findOne(id: number): Promise<ContactBook> {
    return await this.contactBookRepository.findByPk<ContactBook>(id);
  }

  async create(user: ContactBook): Promise<ContactBook> {
    return await this.contactBookRepository.create<ContactBook>({ ...user });
  }

  async update(user: ContactBook, id) {
    const [numberOfAffectedRows, [updatedContactBook]] =
      await this.contactBookRepository.update(
        { ...user },
        { where: { id }, returning: true },
      );
    return { numberOfAffectedRows, updatedContactBook };
  }

  async destroy(id: number) {
    return await this.contactBookRepository.destroy({ where: { id } });
  }
}
