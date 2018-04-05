import {Task} from './task';

export class TaskServices {
    // static draw() {
    //     let host = document.getElementById('main');
    //     host.innerHTML = '';
    //     this.tasks.forEach((element)=>{
    //         Draw.drawTask(host, element);
    //     })
    // }
    static getTasksFromServer() {
        return fetch('http://localhost:3000/tasks')
            .then(res => res.json())
    }
    static addNewTaskToServer(task) {
        fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                //'Accept': 'application/json, text/plain, */*',
                'Content-type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({id: task.id, name: task.name, desc: task.desc })
        })
    }
    static deleteTaskFromServer(task) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'DELETE'
        })
    }
    static updateTaskOnServer(task) {
        fetch(`http://localhost:3000/tasks/${task.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: task.id,
                name: task.name,
                desc: task.desc
              }),
              headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
    }
}