import {Task} from './task'
import {TaskServices} from './task.services'
import * as Rxjs from 'rxjs'

export class UserServices {
    // constructor(username, password, tasks) {
    //     this.username = username;
    //     this.password = password;
    //     this.tasks = tasks;
    // }


    static draw(host, user) {
        host.innerHTML = '';

        const dodajTask = document.createElement('button');
        dodajTask.textContent = 'Add new';
        host.appendChild(dodajTask);

        const obrisiNalog = document.createElement('button');
        obrisiNalog.textContent = 'Delete account';
        host.appendChild(obrisiNalog);

        const logOut = document.createElement('button');
        logOut.textContent = 'Log out';
        logOut.onclick = () => location.reload();
        host.appendChild(logOut);

        const naslov = document.createElement('h1');
        naslov.textContent = user.id;
        console.log(user.id);
        host.appendChild(naslov);
        TaskServices.getTasksFromServer(user.id)
            .then((tasks) => {
                tasks.forEach((task) => {
                    TaskServices.draw(host, task);
                });
            });

        const obObrisi = Rxjs.Observable.fromEvent(document, 'click')
            .filter((e) => e.target.textContent == 'x')
            .pluck('target', 'parentNode', 'firstChild', 'textContent')
            .subscribe(
                (taskName) => {
                    TaskServices.deleteTaskFromServer(taskName);
                    setTimeout(() => UserServices.draw(host, user), 1000);
                }
            );

        const obAddTask = Rxjs.Observable.fromEvent(dodajTask, 'click')
            .subscribe(
                () => {
                    host.innerHTML = '';
                    const label1 = document.createElement('label');
                    label1.textContent = 'Task: ';
                    host.appendChild(label1);
                    const input1 = document.createElement('input');
                    input1.type = 'text';
                    label1.appendChild(input1);

                    const label2 = document.createElement('label');
                    label2.textContent = 'Description: ';
                    host.appendChild(label2);
                    const input2 = document.createElement('input');
                    input2.type = 'text';
                    label2.appendChild(input2);

                    const dodaj = document.createElement('button');
                    dodaj.textContent = 'dodaj';
                    host.appendChild(dodaj);

                    const obClickDodaj = Rxjs.Observable.fromEvent(dodaj, 'click')
                        .subscribe(
                            () => {
                                fetch(`http://localhost:3000/tasks?id=${input1.value}`)
                                    .then(response => response.json())
                                    .then(data => {
                                        if (data.length == 0) {
                                            console.log(data);
                                            TaskServices.addNewTaskToServer(new Task(input1.value, input2.value, user.id))
                                            setTimeout(() => UserServices.draw(host, user), 1000);

                                        } else {
                                            window.alert('Task pod ovim imenom vec postoji!');
                                            input1.value = '';
                                        }
                                    })
                            }
                        );

                }
            )
        const obDelete = Rxjs.Observable.fromEvent(obrisiNalog, 'click')
            .subscribe(
                () => {
                    fetch(`http://localhost:3000/users/${user.id}`, {
                        method: 'DELETE'
                    }).then(()=> {
                        fetch(`http://localhost:3000/tasks?userID=${user.id}`, {
                            method: 'DELETE'
                        }).then(() => location.reload())
                    })
                }
            )

    }
}
