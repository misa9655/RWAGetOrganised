import './style.css';
import {TaskServices} from './task.services';
import {Task} from './task';
import * as Rxjs from 'rxjs';
import img from './avatar.png';



const main = document.getElementById('main');

//#region crtanje forme za kreiranje novog naloga

// const createAccountBox = document.createElement('div');
// createAccountBox.classList.add('login-box');
// main.appendChild(createAccountBox);


// const logo = document.createElement('img');
// logo.src = img;
// logo.className = 'avatar';
// createAccountBox.appendChild(logo);

// const naslov = document.createElement('h1');
// naslov.textContent = 'Create new account';
// createAccountBox.appendChild(naslov);

// const p = document.createElement('p');
// p.textContent = 'Username';
// createAccountBox.appendChild(p);

// const username = document.createElement('input');
// username.type = 'text';
// username.placeholder = 'Enter Username';
// createAccountBox.appendChild(username);

// const p1 = document.createElement('p');
// p1.textContent = 'Password';
// createAccountBox.appendChild(p1);

// const password = document.createElement('input');
// password.type = 'password';
// password.placeholder = 'Enter Password';
// createAccountBox.appendChild(password);

// const create = document.createElement('input');
// create.type = 'submit';
// create.value = 'Create';
// create.className = 'login-button';
// createAccountBox.appendChild(create);

// const link = document.createElement('a');
// link.href = '#';
// link.textContent = 'Alredy have account?';
// createAccountBox.appendChild(link);

// const obCreate = Rxjs.Observable.fromEvent(create, 'click')
//     .subscribe(
//         () =>{
//             fetch(`http://localhost:3000/users?id=${username.value}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     if(data.length != 0) {
//                         window.alert('That username alredy exist!');
//                     }
//                     else {
//                         fetch('http://localhost:3000/users', {
//                             method: 'POST',
//                             headers: {
//                                 'Content-type': 'application/json; charset=UTF-8'
//                             },
//                             body: JSON.stringify({ tasks: [], password: password.value, id: username.value})
//                         }).then(res => console.log(res));
//                     }
//                 })
//         }
//     );

//endregion

//#region crtanje login forme

const loginBox = document.createElement('div');
loginBox.classList.add('login-box');
main.appendChild(loginBox);

const logo = document.createElement('img');
logo.src = img;
logo.className = 'avatar';
loginBox.appendChild(logo);

const naslov = document.createElement('h1');
naslov.textContent = 'Login Here';
loginBox.appendChild(naslov);

const p = document.createElement('p');
p.textContent = 'Username';
loginBox.appendChild(p);

const username = document.createElement('input');
username.type = 'text';
username.placeholder = 'Enter Username';
loginBox.appendChild(username);

const p1 = document.createElement('p');
p1.textContent = 'Password';
loginBox.appendChild(p1);

const password = document.createElement('input');
password.type = 'password';
password.placeholder = 'Enter Password';
loginBox.appendChild(password);

const login = document.createElement('button');
login.textContent = 'Login';
login.className = 'login-button';
loginBox.appendChild(login);

const link = document.createElement('a');
link.href = '#';
link.textContent = 'Create new account';
loginBox.appendChild(link);

const obLogin = Rxjs.Observable.fromEvent(login, 'click')
    .subscribe(
        () => {
            fetch(`http://localhost:3000/users?id=${username.value}&password=${password.value}`)
                .then(response => response.json())
                .then(data => {
                    if(data.length == 0) {
                        window.alert('Wrong username or password!');
                    }
                    else {
                        console.log(data);
                        nacrtajUsera(main, data[0]);
                    }
                })
        }
    );


//endregion

//#region crtanje usera

const nacrtajUsera = (host, user) => {
    host.innerHTML = '';
    const naslov = document.createElement('h1');
    naslov.textContent = user.id;
    console.log(user.id);
    host.appendChild(naslov);
    user.tasks.forEach((task)=> {
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
        obrisi.textContent = 'X';
        box.appendChild(obrisi);
    });

    
}

//endregion

//#region crtanje taskova

// const nacrtaj = document.createElement('button');
// nacrtaj.textContent = 'Nacrtaj';
// main.appendChild(nacrtaj);
// const div = document.createElement('div');
// main.appendChild(div);

// const obCrtanje = Rxjs.Observable.fromEvent(nacrtaj, 'click')
//     .subscribe(
//         () => {
//             div.innerHTML = '';
//             TaskServices.getTasksFromServer()
//                 .then(data => {
//                     data.forEach((task)=> {
//                         const box = document.createElement('div');
//                         box.classList.add('task');
//                         div.appendChild(box);
//                         const h3 = document.createElement('h3');
//                         h3.innerHTML = task.id;
//                         box.appendChild(h3);
//                         const p = document.createElement('p');
//                         p.innerHTML = task.desc;
//                         box.appendChild(p);
//                         const obrisi = document.createElement('button');
//                         obrisi.textContent = 'X';
//                         box.appendChild(obrisi);
//                     });
//                 })
//         }
//     );

//endregion

//#region logika za brisanje taska iz baze

// const obObrisi = Rxjs.Observable.fromEvent(document, 'click')
//     .filter((e)=> e.target.textContent == 'X')
//     .pluck('target', 'parentNode', 'firstChild', 'textContent')
//     .subscribe(
//         (taskName) => {
//             TaskServices.deleteTaskFromServer(taskName);//implementiraj kasnije da se auto refresuje..
//         }
//     )

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