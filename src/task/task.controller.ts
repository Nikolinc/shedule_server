import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';

@ApiTags('Task')
@Controller('task')
export class TaskController {
  constructor(private taskServer: TaskService) {}

  @ApiOperation({ summary: 'Create task' })
  @Post('/create')
  create(@Body() dto: CreateTaskDto) {
    return this.taskServer.CreateTask(dto);
  }

  @ApiOperation({ summary: 'find all task' })
  @Get('/all')
  getAll() {
    return this.taskServer.findAll();
  }

  @ApiOperation({ summary: 'find one task' })
  @Get(':value')
  findOne(@Param('value') value: string){
    return this.taskServer.findOne(value);
  }

  @ApiOperation({ summary: 'set state task' })
  @Post('/setState')
  setState(@Body() props:{id:string,state:boolean}) {
    return this.taskServer.setState(props.id,props.state);
  }

  @ApiOperation({ summary: 'delete task' })
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.taskServer.delite(id);
  }
  
}
