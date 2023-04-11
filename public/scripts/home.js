$(document).ready(function() {
  loadTasks();
  console.log('YELLOW CHEESE –');

  $("#cat-1").click(function(event) {
    event.preventDefault();
    window.location.replace ('http://localhost:8080/categories/1');
    /* $.get('/categories/1', function(data, status) {
      console.log('HOME', data, typeof data);
      renderTasks(data.tasks, '#cat-1');
    }) */

  });

});


const renderTasks = function(tasks, containerID) {
  console.log('logging tasks', tasks);
  // loops through tweets

  tasks.forEach(task => {
    console.log(task);
    // calls createTweetElement for each tweet
    const element = createTaskElement(task);
    let container =  $(containerID).find('ul');
    container.prepend(element);
  });
}

function createTaskElement(data) {
  //console.log('ELEMENT', data.title);
  const element =
    `<li> ${data.title} </li>`;
  return element;
}

const loadTasks = function() {
  $.get('/api/tasks/byCat/1', function(data, status) {
    //console.log('HOME', data, typeof data);
      renderTasks(data.tasks, '#cat-1');
  })

  $.get('/api/tasks/byCat/2', function(data, status) {
   //console.log('HOME', data, typeof data);
    renderTasks(data.tasks, '#cat-2');
  })

  $.get('/api/tasks/byCat/3', function(data, status) {
    //console.log('HOME', data, typeof data);
    renderTasks(data.tasks, '#cat-3');
  })

  $.get('/api/tasks/byCat/4', function(data, status) {
   // console.log('HOME', data, typeof data);
    renderTasks(data.tasks, '#cat-4');
  })
}

const displayNewTask = function(data) {
  const element = createTaskElement(data);
  $('#cat-1').prepend(element);
}
