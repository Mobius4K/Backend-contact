import { Sequelize } from 'sequelize-typescript';
import { ContactBook } from 'src/contact-book/contact-book.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'agenda-contactos',
      });
      sequelize.addModels([ContactBook]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
