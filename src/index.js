import './style.css';
import {TaskServices} from './task.services';


const t = new TaskServices();
TaskServices.getFromServer()
    .then(res => {
        t.tasks = res;
        t.draw();
    })



    // .then(tasks => {
        
    //     console.log(tasks);
        
    // })


