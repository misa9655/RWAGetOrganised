import {Task} from './task';

export class TaskServices {
    
    static draw(host, task) {
        const box = document.createElement('div');
        box.classList.add('task');
        host.appendChild(box);
        const h3 = document.createElement('h3');
        h3.innerHTML = task.id;
        box.appendChild(h3);
        const p = document.createElement('p');
        p.innerHTML = task.desc;
        box.appendChild(p);
        const obrisi = document.createElement('button');
        obrisi.textContent = 'x';
        box.appendChild(obrisi);
    }

    static getTasksFromServer(userID) {
        return fetch(`http://localhost:3000/tasks?userID=${userID}`)
            .then(res => res.json())
    }
    static addNewTaskToServer(task) {
        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                //'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({id: task.name, desc: task.desc, userID: task.userID })
        })
    }
    static deleteTaskFromServer(id) {
        fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE'
        })
    }
    
    static updateTaskOnServer(task) {
        fetch(`http://localhost:3000/tasks/${task.name}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: task.name,
                desc: task.desc
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
    }
}