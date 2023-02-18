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
      this.tasks=[new Task("First","Do First Task"),
                  new Task("Second","Do Second Task The Larger ONe "),
                  new Task("Third The Larger One","Do Third Task aaaaaaaaaaaaaaaaaaaaa aaaaaaaa aaaaaa aaaaaaaaaaa aaaaaa aaaaaa aaaaaaaaaaaa aaaaaaaaaaaaaaa aaa aa a a a     aaaaaaa aaaa aaaaaa a       aa aa "),
                  new Task("Fourth","Do Fourth Task")];

      this.completedTasks=[new Task("Brushing","Desc 1"),
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
