import { ApiProperty } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({ tableName: 'Task' })
export class Task extends Model<Task> {
  @ApiProperty({ example: '1', description: 'Unique identificator' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Take the dog for a walk',
    description: 'name task',
  })
  @Column({ type: DataType.STRING })
  name: string;

  @ApiProperty({
    example:'Ensure you sccop the poop and take 4 rounds around the apartments. Then serve the food.',
    description: 'description task',
  })
  @Column({ type: DataType.STRING })
  description: string


  @ApiProperty({
    example:'-',
    description: 'discipline task',
  })
  @Column({ type: DataType.STRING })
  discipline:string   

  @ApiProperty({
    example: true,
    description: 'state task',
  })
  @Column({ type: DataType.BOOLEAN })
  state:boolean

  @ApiProperty({
    example: '7/31/2023, 5:38:01 PM',
    description: 'date task',
  })
  @Column({ type: DataType.DATE })
  date:Date;
}
