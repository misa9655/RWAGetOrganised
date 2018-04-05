import {TaskServices} from './task.services'
export class Draw {
    static drawTask(host, task, arr) {
        const div = document.createElement('div');
        div.classList.add('task');
        host.appendChild(div);
        const h3 = document.createElement('h3');
        h3.innerHTML = task.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerHTML = task.desc; 
        div.appendChild(p);
        const obrisi = document.createElement('button');
        obrisi.textContent = 'X';
        obrisi.onclick = () => {
             TaskServices.deleteTaskFromServer(task)
                 .then(() => {
                     drawListOfTasks(arr)
                 })
         }
        div.appendChild(obrisi);
    }
    static drawListOfTasks(tasks) {
        let host = document.getElementById('main');
        host.innerHTML = '';
        tasks.forEach((element, ind, arr)=>{
            Draw.drawTask(host, element, arr);
        })
    }
}