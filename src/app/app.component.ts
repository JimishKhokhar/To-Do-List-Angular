import { Component } from '@angular/core';
import { Task } from './Task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title(title: any) {
      throw new Error('Method not implemented.');
    }


    completedTasks:Task[];
    tasks:Task[];
    constructor()
    {
      this.tasks=[new Task("First Task","Do First Task"),
                  new Task("Second Task","Do Second Task")];

      this.completedTasks=[new Task("Completed Task","Press Done to transfer pending tasks to Completed one"),
                           new Task("Eating","Eating is Important in Life!")];
    }
    AddTask(name:HTMLInputElement,desc:HTMLTextAreaElement):boolean
    {
      if(name.value=="")
      {
        alert("Plase Enter The Task");
        return false;
      }

      this.tasks.push(new Task(name.value,desc.value));
      name.value="";
      desc.value="";
      return false;
    }
    DeleteAll()
    {
      this.tasks=[];
    }
    Delete(task:Task)
    {
      let Name=task.Name;
      let Desc=task.Desc;
      for(let i=0;i<this.tasks.length;i++)
      {
         if(this.tasks[i].Name==Name && this.tasks[i].Desc==Desc)
         {
            this.tasks.splice(i,1);
            break;
         }
      }
    }

    DeletingCompleted(task:Task)
    {
        let Name=task.Name;
        let Desc=task.Desc;
        for(let i=0;i<this.completedTasks.length;i++)
        {
          if(this.completedTasks[i].Name==Name && this.completedTasks[i].Desc==Desc)
          {
              this.completedTasks.splice(i,1);
              break;
          }
        }
    }


    AddToCompleted(task:Task)
    {
        this.completedTasks.push(task);
        this.Delete(task);
    }

}
