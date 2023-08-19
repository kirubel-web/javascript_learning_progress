const todoList = [
  {
    name: "Make Dinner",
    dueDate: "12-21-2024",
  },
];
renderTodoList();
function renderTodoList() {
  let todoListHTML = "";
  todoList.forEach(function(todoObject, index){
   
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
    todoList.splice(${index}, 1);
    renderTodoList();
    " >Delete</button> 
    
      `;
    todoListHTML += html;
  });
  for (let i = 0; i < todoList.length; i++) {
    
  }

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;
}
function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;
  //todoList.push({name: name, dueDate: dueDate});
  console.log(dueDate);
  todoList.push({ name, dueDate });

  inputElement.value = "";
  renderTodoList();
}
