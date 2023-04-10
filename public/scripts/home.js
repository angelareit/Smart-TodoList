$(document).ready(function() {
  loadTasks();
  console.log('YELLOW CHEESE –');
});

const data = [
  { id: 1 ,text: 'Hello There' },
  { id: 2, text: 'Hello Ang' },
];


const renderTasks = function(tasks) {
  console.log('logging tasks', tasks);
  // loops through tweets

  tasks.forEach(task => {
    console.log(task);
    // calls createTweetElement for each tweet
    const element = createTaskElement(task);
     $('#cat-1').prepend(element);
  });
}

function createTaskElement(data) {
  console.log('ELEMENT', data.title);
  const element =
    `<li> ${data.title} </li>`;
  return element;
}

const loadTasks = function() {
  //pull data from server and display them with the format
  $.get('/API/tasks/title', function(data, status){
    console.log('HOME', data, typeof data);
    renderTasks(data.tasks);
  })
}

const displayNewTask = function(data) {
  const element = createTaskElement(data);
  $('#cat-1').prepend(element);
}
