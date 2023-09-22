import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateTaskDto {
  @ApiProperty({
    example: 'Take the dog for a walk',
    description: 'name task',
  })
  @IsString({ message: 'should be a string' })
  name: string;

  @ApiProperty({
    example:'Ensure you sccop the poop and take 4 rounds around the apartments. Then serve the food.',
    description: 'description task',
  })
  @IsString({ message: 'should be a string' })
  description: string


  @ApiProperty({
    example:'-',
    description: 'discipline task',
  })
  @IsString({ message: 'should be a string' })
  discipline:string   

  @ApiProperty({
    example: true,
    description: 'state task',
  })
  @IsString({ message: 'should be a boolean' })  
  state:boolean

  @ApiProperty({
    example: '7/31/2023, 5:38:01 PM',
    description: 'date task',
  })
  @IsString({ message: 'should be a date' })  
  date:Date;

  
}