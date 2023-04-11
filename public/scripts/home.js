$(document).ready(function() {
  loadCategories();
  console.log('YELLOW CHEESE –');

  $("#1").click(function(event) {
    event.preventDefault();
    window.location.replace('http://localhost:8080/categories/1');
    /*    $.put('/categories/1', function(data, status) {
        console.log('CAT HOME', data, typeof data);
      }); */
  });

});

const renderCategories = function(categories) {
  categories.forEach(element => {
    const categoryHTML = createCategoryBlock(element);
    $('.category-container').append(categoryHTML)
  });

}
function createCategoryBlock(data) {
  console.log('categoryBlock', typeof data, data);
  let elementList = '';
  data.tasktitles.forEach(title => { elementList += `<li> ${title} </li>` });

  const element = `
          <article class="category" id = "${data.catid}">
          <h2>${data.catname}</h2>
          ${elementList}
          </article>

          `
  return element;
}

function createTaskElement(data) {
  const element =
    `<li> ${data.title} </li>`;
  return element;
}


const loadCategories = function() {
  $.get('/api/tasks/allTasks', function(data, status) {
    console.log('HOME', data, typeof data);
    renderCategories(data.tasks);
    generateListeners(data.tasks);
  })
}
const generateListeners = function(data) {
  console.log('generate listeners', data);
  data.forEach(element => {

    $(`#${element.catid}`).click(function(event) {
      console.log('inside element', element.catid);
      window.location.href = `http://localhost:8080/categories/${element.catid}`;

    });


    /*   document.getelementbyid(element.catid).addEventListener("click", function(){
        console.log('inside element',element.catid);
    }); */

  });

}


const displayNewTask = function(data) {
  const element = createTaskElement(data);
  $('1').prepend(element);
}
