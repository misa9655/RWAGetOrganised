import {Task} from './task';

export class TaskServices {
    // static draw() {
    //     let host = document.getElementById('main');
    //     host.innerHTML = '';
    //     this.tasks.forEach((element)=>{
    //         Draw.drawTask(host, element);
    //     })
    // }

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
            body: JSON.stringify({id: task.name, desc: task.desc })
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