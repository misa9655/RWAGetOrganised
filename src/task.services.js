import {Task} from './task';
import {Draw} from './draw';

export class TaskServices {
    constructor(tasks) {
        this.tasks = [];
    }
    
    draw() {
        this.tasks.forEach((element)=>{
            Draw.drawTask(document.getElementById('main'), element);
        })
    }
    static getFromServer() {
        return fetch('http://localhost:3000/tasks')
            .then(res => res.json())
    }
}