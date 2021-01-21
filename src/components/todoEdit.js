const addClass = ({ target }) => {
  target.closest("li").classList.add("editing");
  const $edit = target.closest("li").querySelector(".edit");
  const targetLabel = target;

  $edit.addEventListener("keyup", ({ target, key }) => {
    if (key === "Escape") {
      target.closest("li").classList.remove("editing");
    } else if (key === "Enter") {
      targetLabel.innerText = target.value;
      target.closest("li").classList.remove("editing");
    }
  });
};

export const todoEdit = () => {
  const $todoList = document.querySelector("#todo-list");
  $todoList.addEventListener("dblclick", addClass);
};
