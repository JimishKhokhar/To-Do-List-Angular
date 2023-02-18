import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
   @Input() TaskList:Task[];
   @Input() CompletedTaskList:Task[];
   @Output() Deleting:EventEmitter<Task>;
   @Output() DeletingCompleted:EventEmitter<Task>;
   @Output() AddingToCompleted:EventEmitter<Task>;

   constructor()
   {
     this.Deleting = new EventEmitter();
     this.DeletingCompleted=new EventEmitter();
     this.AddingToCompleted=new EventEmitter();


     this.TaskList=[];
     this.CompletedTaskList=[];
     
   }

   DeleteIt(Name:string,Desc:string)
   {
      this.Deleting.emit(new Task(Name,Desc));
   }

   DeleteCompleted(task:Task)
   {
      this.DeletingCompleted.emit(task);
      return;
   }

   AddToComp(task:Task)
   {
      this.AddingToCompleted.emit(task);
   }

}
