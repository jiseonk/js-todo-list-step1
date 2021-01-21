export const todoEdit = () => {
    const $todoList = document.querySelector("#todo-list");
    $todoList.addEventListener("dblclick", addClass);
    
}

const addClass = (event) => {
    event.target.closest('li').classList.add('editing');
}