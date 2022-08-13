$(document).ready(onReady);

function onReady() {
  console.log('in onReady');

  getTasks();

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
      let task = response[i]
      $('#viewTasks').append(`
      <tr>
        <td>${task.id}</td>
        <td>${task.date_added}</td>
        <td>${task.task_title}</td>
        <td>${task.task_descript}</td>
        <td>${task.priority}</td>
        <td>${task.completed_at}</td>
        <td>${task.notes}</td>
      </tr>
        `)
    }
  }).catch(function (error) { // Reject / failure
    console.log('ERROR in GET /tasks', error);
    alert('something went wrong!');
  })
}

