import './style.css';
import {TaskServices} from './task.services';
import {Task} from './task';
import * as Rxjs from 'rxjs';


const main = document.getElementById('main');

//#region crtanje taskova

const nacrtaj = document.createElement('button');
nacrtaj.textContent = 'Nacrtaj';
main.appendChild(nacrtaj);
const div = document.createElement('div');
main.appendChild(div);

const obCrtanje = Rxjs.Observable.fromEvent(nacrtaj, 'click')
    .subscribe(
        () => {
            div.innerHTML = '';
            TaskServices.getTasksFromServer()
                .then(data => {
                    data.forEach((task)=> {
                        const box = document.createElement('div');
                        box.classList.add('task');
                        div.appendChild(box);
                        const h3 = document.createElement('h3');
                        h3.innerHTML = task.id;
                        box.appendChild(h3);
                        const p = document.createElement('p');
                        p.innerHTML = task.desc;
                        box.appendChild(p);
                        const obrisi = document.createElement('button');
                        obrisi.textContent = 'X';
                        box.appendChild(obrisi);
                    });
                })
        }
    );
const obObrisi = Rxjs.Observable.fromEvent(document, 'click')
    .filter((e)=> e.target.textContent == 'X')
    .pluck('target', 'parentNode', 'firstChild', 'textContent')
    .subscribe(
        (taskName) => {
            TaskServices.deleteTaskFromServer(taskName);//implementiraj kasnije da se auto refresuje..
        }
    )

//endregion

//#region logika za dodavanje taskova u bazu

// const label1 = document.createElement('label');
// label1.textContent = 'Task: ';
// main.appendChild(label1);
// const input1 = document.createElement('input');
// input1.type = 'text';
// label1.appendChild(input1);

// const label2 = document.createElement('label');
// label2.textContent = 'Description: ';
// main.appendChild(label2);
// const input2 = document.createElement('input');
// input2.type = 'text';
// label2.appendChild(input2);

// const dodaj = document.createElement('button');
// dodaj.textContent = 'dodaj';
// main.appendChild(dodaj);


// const obClickDodaj = Rxjs.Observable.fromEvent(dodaj, 'click')
//     .subscribe(
//         () => {
//             fetch(`http://localhost:3000/tasks?name=${input1.value}`)
//             .then(response=>response.json())
//             .then(data => {
//                 if(data.length == 0) {
//                     console.log(data);
//                     TaskServices.addNewTaskToServer(new Task(undefined, input1.value, input2.value));
//                 }else {
//                     window.alert('Task pod ovim imenom vec postoji!');
//                     input1.value = '';
//                 }
//             })
//         }
//     );

//endregion

//#region stari kod za usera
// const u = new User();


// const div = document.createElement('div');
// document.body.appendChild(div);
// const name = document.createElement('input');
// name.type = 'text';
// name.placeholder = 'Task';
// div.appendChild(name);
// const desc = document.createElement('input');
// desc.type = 'text'
// desc.placeholder = "Description";
// div.appendChild(desc);
// const dugme = document.createElement('button');
// dugme.textContent = 'Dodaj';
// dugme.onclick = () => {
//     t.addNewTaskToServer(new Task(undefined, name.value, desc.value));

//     t.draw();
// }
// div.appendChild(dugme);

//endregion
