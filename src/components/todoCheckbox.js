const removeTodo = (target) => {
  target.closest("li").remove();
};

const toggleTodo = (target) => {
  target.toggleAttribute("checked");
  target.closest("li").classList.toggle("completed");
};

const triggerClick = ({ target }) => {
  if (target.className === "toggle") {
    toggleTodo(target);
  } else if (target.className === "destroy") {
    removeTodo(target);
  }
};

export const todoCheckbox = () => {
  const $todoList = document.querySelector("#todo-list");

  $todoList.addEventListener("click", triggerClick);
};
