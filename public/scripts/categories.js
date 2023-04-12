$(document).ready(function() {
  //loadTasks();
  console.log('BLUE CHEESE –');
/*   console.log( $("section").children('.task-update-options'));
  $('.task-update-options').css("display","none"); */
});


const loadTasks = function() {
  $.get('/api/tasks/byCat/1', function(data, status) {
    console.log('CAT HOME', data, typeof data);
    renderTasks(data.tasks);
  })
}

const updateTask = function(taskID){
  console.log('updateTask', taskID);
  const currentTaskBlock= $(`#${taskID}`);
  let taskTitle = currentTaskBlock.find('.title')[0];
  let taskUpdateOptions = currentTaskBlock.find('.task-update-options')[0];
  $(taskTitle).toggle();
  $(taskUpdateOptions).toggle();
}

const updateTaskValue = function (taskID)
{

}

const deleteTask = function(taskID){
  console.log('deleteTask', taskID);
}

const completeTask = function(taskID){
  console.log('completeTask', taskID);
}

