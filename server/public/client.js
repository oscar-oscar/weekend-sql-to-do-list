$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('#addButton').on('click', sendTasks);
  $('body').on('click', '.delete-task', deleteTask);
  //clickListeners();
  getTasks();
  sendTasks();
  

}
function emptyInputs() {
  $('input').val('');
  $('select').val('');
}
//functin to get list of tasks
function getTasks(){
  console.log('in getTasks');
  //ajax to call to server to get tasks list
  $.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function (response) {
    console.log(response); // Resolve / succeed
    $('#viewTasks').empty();
    // const date = new Date();
    for(let i = 0; i < response.length; i++){
      let tasks = response[i]
      $('#viewTasks').append(`
      <tr>
        <td>${tasks.id}</td>
        <td>${tasks.date_added}</td>
        <td>${tasks.task_title}</td>
        <td>${tasks.task_descript}</td>
        <td>${tasks.priority}</td>
        <td>${tasks.status}</td>
        <td>${tasks.notes}</td>
        <td>completedbutton</td>
        <td><button class="delete-task" data-id="${tasks.id}">Delete</button></td>
      </tr>
        `)
    }
  }).catch(function (error) { // Reject / failure
    console.log('ERROR in GET /tasks', error);
    alert('something went wrong!');
  })
}
//ajax POST function to add tasks
function sendTasks(){
  console.log('in sendTasks');
  $.ajax({
    type: 'POST',
    url: '/tasks',
    data:{
      date_added: $('#dateIn').val(),
      task_title: $('#taskAdd').val(),
      task_descript: $('#taskDescription').val(),
      priority: $('#priorityIn').val(),
      notes: $('#noteIn').val(),
      status: $('#statusIn').val(),
    }
  }).then(function (response) {
    getTasks();
  }).catch(function (error) {
    console.log('ERROR in POST /tasks', error);
    alert('something went wrong in sendTasks');
  });
  emptyInputs();
}
//setup click listeners 
// function clickListeners(){
//   $('#addButton').on('click', function(){
//     console.log('in addButton on click');
//   })
// }

function deleteTask(){
  console.log('in deleteTask');
  const taskId = $(this).data('id');
  $.ajax({
    type: 'DELETE',
    //what are we deleteing?
    url: `/tasks/${taskId}`
  }).then(function (response) {
    console.log(response);
    getTasks();
  }).catch(function (error) {
    console.log(error);
    alert('something went wrong in deleteTask');
  });
}







