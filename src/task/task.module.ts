import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Task } from './task.table';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports: [SequelizeModule.forFeature([Task]),
],
 exports: [TaskService],
})
export class TaskModule {}
