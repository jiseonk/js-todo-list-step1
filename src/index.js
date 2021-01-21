import { todoCheckbox } from "./components/todoCheckbox.js";
import { todoInput } from "./components/todoInput.js";

const app = () => {
  todoInput();
  todoCheckbox();
};

window.onload = () => {
  app();
};
