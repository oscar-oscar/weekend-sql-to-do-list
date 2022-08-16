# TO-DO LIST

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

Create a to-do list app in which user inputs the date, task title, description, priority level and addtional notes. When the task is submitted, it will append with 2 buttons. One will delete the task and one will change the task from "WIP" to "complete" in the status column. The status change will be changed on the page and logged in the database. When the user deletes the task, it will be removed from the DOM and database. Allowing the user the ability to CRUD is the base goal.

Problems & Solutions

Problem 1: user needs to input a new task.
Solution : Provide an input form for the user. This was done with HTML/CSS and the functionality is done with JS functions.  

Problem 2: User needs to see/read the new task on their page.
Solution: Create a datbase using Postico and SQL code to hold all the user's task data. I used JS to write a server side GET route request for the user to fetch the task list. The list data is then shown to them via AJAX in the client side GET request allowing that info to append onto the page. 

Problem 3: User needs to update their task from "WIP" to "Complete"
Solution: Provide the user with a button that commits the change/update. When the task is updated on the page, the user should see data in the status column change to "complete". This is made possibe by the PUT request on the server router side and the user sees the change because of the AJAX PUT requst on the client side. The database is updated because of the UPDATE query SQL code within the PUT request in the server/router code. 

Problem 4: The user should be able to delete their tasks from their list. 
Solution: Write a DELETE request on ther server/router side and client side utilizing AJAX again so the user sees the change. The SQL is entered into the router/server side for the DELETE request and this deletes the task data from the database.

