
export class Draw {
    static drawTask(host, task) {
        const div = document.createElement('div');
        div.classList.add('task');
        host.appendChild(div);
        const h3 = document.createElement('h3');
        h3.innerHTML = task.name;
        div.appendChild(h3);
        const p = document.createElement('p');
        p.innerHTML = task.desc; 
        div.appendChild(p);
    }
}