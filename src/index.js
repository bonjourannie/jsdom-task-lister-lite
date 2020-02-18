document.addEventListener("DOMContentLoaded", () => {
  addTaskToDoWithDeleteOption();
});

function addTaskToDoWithDeleteOption() {
  const form = document.getElementById("create-task-form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const userInput = event.target.querySelector("#new-task-description");
    const showLists = document.getElementById("tasks");
    const li = document.createElement("li");
    showLists.appendChild(li);
    li.textContent = userInput.value; 

    const deleteButton = document.createElement("button");
    li.appendChild(deleteButton);
    deleteButton.textContent = "x";

    userInput.value = ""; 
    
    deleteButton.addEventListener("click", () => {
      const result = confirm("Want to delete");
      if (result) {
        li.remove();
      }
    })
  })
}