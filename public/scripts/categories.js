$(document).ready(function() {
  loadTasks();
  console.log('BLUE CHEESE –');
});


const loadTasks = function() {
  $.get('/api/tasks/byCat/1', function(data, status) {
    console.log('HOME', data, typeof data);
    renderTasks(data.tasks, '#cat-1');
  })
}
