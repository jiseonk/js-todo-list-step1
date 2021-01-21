const todoTemplate = (title) => {
  return `<li>
            <div class="view">
                <input class="toggle" type="checkbox"/>
                <label class="label">${title}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="${title}" />
          </li>`;
};

const addTodoItem = ({ target, key }) => {
  if (target.value && key === "Enter") {
    const $todoList = document.querySelector("#todo-list");

    $todoList.insertAdjacentHTML("beforeend", todoTemplate(target.value));
    target.value = "";
  }
};

export const todoInput = () => {
  const $newTodoTitle = document.querySelector("#new-todo-title");

  $newTodoTitle.addEventListener("keyup", addTodoItem);
};
