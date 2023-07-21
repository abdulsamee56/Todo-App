// taskAdder.js
const addBtn = document.querySelector('#add');
const taskInput = document.querySelector('#taskInput');
const descInput = document.querySelector('#descInput');
const dateInput = document.querySelector('#dateInput');
const taskList = document.querySelector('#taskList');
const taskSections = document.querySelector('#task-section');

const taskLists = [];

function addingTasks() {
    addBtn.addEventListener('click', function () {
        const listItem = document.createElement('li');
        listItem.textContent = taskInput.value;
        listItem.classList.add('left-hand-task'); // Add a class for easier selection later
        taskList.appendChild(listItem);

        // Create the task section HTML
        const taskSection = document.createElement('div');
        taskSection.classList.add('task-section');

        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');

        const upper = document.createElement('div');
        upper.classList.add('upper');

        const taskName = document.createElement('div');
        taskName.id = 'task-name';
        taskName.textContent = taskInput.value;

        const dateTime = document.createElement('div');
        dateTime.id = 'date-time';
        dateTime.textContent = dateInput.value; // Assuming you have an input field with id='dateInput' for entering date

        upper.appendChild(taskName);
        upper.appendChild(dateTime);

        const lower = document.createElement('div');
        lower.classList.add('upper');

        const descriptionText = document.createElement('div');
        descriptionText.id = 'description';
        descriptionText.textContent = descInput.value; // Assuming you have an input field with id='descInput' for entering description

        const selectBtnText = document.createElement('div');
        selectBtnText.id = 'select-btn';
        selectBtnText.textContent = 'Buttons'; // Assuming this is what you want to add in the 'Buttons' div

        lower.appendChild(descriptionText);
        lower.appendChild(selectBtnText);

        taskContainer.appendChild(upper);
        taskContainer.appendChild(lower);

        taskSections.appendChild(taskContainer);

        // Add the task section to the task list
       

        // Clear input fields after adding the task
        taskInput.value = '';
        descInput.value = '';
        dateInput.value = '';
    });
}

export default addingTasks;
