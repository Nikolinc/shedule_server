import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './task.table';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TaskService {

  constructor(
    @InjectModel(Task) private taskRepository: typeof Task,
  ){}

  async CreateTask(dto:CreateTaskDto):Promise<Task>{
    const task = this.taskRepository.create(dto);
    return task
  }
  
  async findOne(id:string):Promise<Task>{
    const task = this.taskRepository.findOne({ where: { id } });
    return task
  }

  async findAll():Promise<Task[]>{
    const tasks = this.taskRepository.findAll();
    return tasks
  }

  async setState(id:string, state:boolean):Promise<Task>{
    const task = this.taskRepository.findOne({ where: { id } });
    (await task).state = state;
    return task
  }

  async delite(id:string):Promise<Task>{
    const task = (await this.taskRepository.findOne({ where: { id } })).deletedAt;    
    return task
  }

}
