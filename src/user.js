import {TaskServices} from './task.services'
//import {Draw} from './draw'
export class User {
    constructor(username) {
        this.username = username;
        TaskServices.getTasksFromServer()
            .then((res) => {
                this.tasks = res;
                this.drawUser();
                //Draw.drawListOfTasks(this.tasks);
            })
    }
    drawListOfTasks() {

    }
    drawUser() {
        let host = document.getElementById('main');
        host.innerHTML = '';
        tasks.forEach((element)=>{
            //Draw.drawTask(host, element, arr);
            const div = document.createElement('div');
            div.classList.add('task');
            host.appendChild(div);
            const h3 = document.createElement('h3');
            h3.innerHTML = element.name;
            div.appendChild(h3);
            const p = document.createElement('p');
            p.innerHTML = element.desc; 
            div.appendChild(p);
            const obrisi = document.createElement('button');
            obrisi.textContent = 'X';
            obrisi.onclick = () => {
                TaskServices.deleteTaskFromServer(task)
                    .then(() => {
                         this.drawUser();
                    })
            div.appendChild(obrisi);
         }
        
        })
    }


}