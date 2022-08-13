const express = require('express');
const router = express.Router();
// .. allows us to go up a directory 
const pool = require('../modules/pool.js');

//GET
router.get('/', (req, res) => {
    console.log('in GET /tasks');
    const queryText = 'SELECT * FROM "todo_list";';
    pool.query(queryText).then((result) => {
        console.log('SELECT SUCESSFUL', result);
        res.send(result.rows);
    }).catch((error) => {
        console.log('ERROR in GET /tasks', error);
        res.sendStatus(500);
    });
})

//POST
router.post('/', (req, res) => {
    console.log('in POST router');
    const task = req.body;
    const queryText = `INSERT INTO "todo_list" ("date_added", "task_title", "task_descript", "priority","completed_task", "notes")
                        VALUES ($1, $2, $3, $4, $5, $6);`;
    pool.query(queryText, [task.date_added, task.task_title, task.task_descript, task.priority, task.completed_task, task.notes])
        .then((results) => {
            console.log(results);
            res.send(results);
        }).catch((error) => {
            console.log('ERRROR in POST /tasks', error);
            res.sendStatus(500);
        });
});


module.exports = router;