class Task {
    constructor(desc, status){
        this.desc = desc
        this.status = status
    }

    html(pos){
        return `<div class="tarea">
        <button class="close-x" onclick="deleteTask(${pos})">X</button>
        <p>${this.desc}</p>
        <div>
        <button class="back" onclick="stepBack(${pos})">-</button>
        <button class="forward" onclick="updateTask(${pos})">+</button>
        </div>
    </div>`
    }
}