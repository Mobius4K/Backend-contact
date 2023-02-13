import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

@Table
export class ContactBook extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty()
  nombre: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty()
  apellido: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty()
  celular: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty()
  fijo: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  @ApiProperty()
  correo: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  @ApiProperty()
  direccion: string;
}
