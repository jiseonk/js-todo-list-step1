import { todoCheckbox } from "./components/todoCheckbox.js";
import { todoInput } from "./components/todoInput.js";
import { todoEdit } from "./components/todoEdit.js";

const app = () => {
  todoInput();
  todoCheckbox();
  todoEdit();
};

window.onload = () => {
  app();
};
