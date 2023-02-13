import { Controller } from '@nestjs/common';
import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common/decorators';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { ContactBookService } from './contact-book.service';
import { ContactBook } from './contact-book.entity';

@ApiTags('contact-book')
@Controller('contact-book')
export class ContactBookController {
  constructor(private contactBookService: ContactBookService) {}

  @Get()
  async findAll(): Promise<ContactBook[]> {
    return await this.contactBookService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  async findOne(@Param() params): Promise<ContactBook> {
    return await this.contactBookService.findOne(params.id);
  }

  @Post()
  async create(@Body() user: ContactBook): Promise<ContactBook> {
    return await this.contactBookService.create(user);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  async update(
    @Param('id') id,
    @Body() user: ContactBook,
  ): Promise<ContactBook> {
    const { numberOfAffectedRows, updatedContactBook } =
      await this.contactBookService.update(id, user);
    return updatedContactBook;
  }

  @Delete(':id')
  @ApiParam({ name: 'id' })
  async destroy(@Param('id') id: number) {
    return await this.contactBookService.destroy(id);
  }
}
