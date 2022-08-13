$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('#addButton').on('click', sendTasks);
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
    for(let i = 0; i < response.length; i++){
      let tasks = response[i]
      $('#viewTasks').append(`
      <tr>
        <td>${tasks.id}</td>
        <td>${tasks.date_added}</td>
        <td>${tasks.task_title}</td>
        <td>${tasks.task_descript}</td>
        <td>${tasks.priority}</td>
        <td>${tasks.completed_task}</td>
        <td>${tasks.notes}</td>
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
