$(document).ready(onReady);

function onReady() {
  console.log('in onReady');
  $('#addButton').on('click', sendTasks);
  $('body').on('click', '.delete-task', deleteTask);
  $('body').on('click', '.update-task', updateStatus);
  getTasks();

}

function emptyInputs() {
  $('input').val('');
  $('select').val('');
}
//functin to get list of tasks
function getTasks() {
  console.log('in getTasks');
  //ajax to call to server to get tasks list
  $.ajax({
    type: 'GET',
    url: '/tasks'
  }).then(function (response) {
    console.log(response); // Resolve / succeed
    $('#viewTasks').empty();
    // const date = new Date();
    for (let i = 0; i < response.length; i++) {
      let tasks = response[i];
      // let statusButton = statusComplete(tasks)
      // console.log(statusButton);

      if (tasks.status === 'completed') {
        //$('tr').css('color', 'red');
        $('#viewTasks').append(`
        <tr>
          <td>${tasks.id}</td>
          <td>${tasks.date_added}</td>
          <td>${tasks.task_title}</td>
          <td>${tasks.task_descript}</td>
          <td>${tasks.priority}</td>
          <td>${tasks.notes}</td>
          <td>${tasks.status}</td>
          <td></td>
          <td><button class="delete-task" data-id="${tasks.id}">Delete</button></td>
        </tr>
          `);
          
    }else{
      $('#viewTasks').append(`
      <tr>
        <td>${tasks.id}</td>
        <td>${tasks.date_added}</td>
        <td>${tasks.task_title}</td>
        <td>${tasks.task_descript}</td>
        <td>${tasks.priority}</td>
        <td>${tasks.notes}</td>
        <td>${tasks.status}</td>
        <td><button class="update-task" data-id="${tasks.id}">Mark Complete</button></td>
        <td><button class="delete-task" data-id="${tasks.id}">Delete</button></td>
      </tr>
        `);
    }}
  }).catch(function (error) { // Reject / failure
    console.log('ERROR in GET /tasks', error);
    alert('something went wrong!');
  })
}
//ajax POST function to add tasks
function sendTasks() {
  console.log('in sendTasks');
  $.ajax({
    type: 'POST',
    url: '/tasks',
    data: {
      date_added: $('#dateIn').val(),
      task_title: $('#taskAdd').val(),
      task_descript: $('#taskDescription').val(),
      priority: $('#priorityIn').val(),
      notes: $('#noteIn').val(),
      status: 'WIP',
    }
  }).then(function (response) {
    getTasks();
  }).catch(function (error) {
    console.log('ERROR in POST /tasks', error);
    alert('ERROR. Double-check date input format');
  });
  emptyInputs();
}

function statusComplete() {
  console.log('in statusComplete');
  if (tasks.status === 'completed') {
    return true;
} else {
  return ''
}


  // $('.update-task').append(`
  //   <li>

  //   <span>this is ${color}..</span>
  //   <button class="fridgen">Fridgen</button> 
  //   <button class="deleteBtn">X</button>
  //   ;

  //   </li>`);
  // if(tasks.status === 'completed'){
  //   return  $( "p" ).click(function() {
  //     $( this ).toggleClass( "highlight" );
  //   });
  //$('#update-task').css('border', '3px solid teal');


}

// $( "p" ).click(function() {
//   $( this ).toggleClass( "highlight" );
// });
//$(this).css('background', 'lightgreen')
// $( '.update-task' ).click(function() {
//   $( this ).switchClass( "big", "blue", 1000, "easeInOutQuad" );
// });




// function statusColor(tasks){
//   console.log('in statusColor');
//   if(tasks.status === 'coompleted'){
//     return  $('#update-task').css('border', '3px solid teal');
//   }else{
//     return 'x'
//   }
// }



function updateStatus() {
  // $(this).css('background-color', 'yellow');
  const taskId = $(this).data('id');
  //can I run a variable through status like taskId in url?
  $.ajax({
    type: 'PUT',
    url: `/tasks/${taskId}`,
    data: {
      status: 'completed',
    }
  }).then(function (response) {
    getTasks();
    //statusComplete();
  }).catch(function (error) {
    console.log(error);
    alert('something went wrong');
  })
}

function deleteTask() {
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







