const express = require('express');
const router = express.Router();
// .. allows us to go up a directory 
const pool = require('../modules/pool.js')

//GET
router.get('/', (req, res) => {
    console.log('in GET /tasks');
    // const queryText = 'SELECT * FROM "todo_list";';
    // pool.query(queryText).then((result) => {
    //     console.log('SELECT SUCESSFUL', result);
    //     res.send(result.row);
    // }).catch((error) => {
    //     console.log('ERROR in GET /tasks', error);
    //     res.sendStatus(500);
    // });
})


module.exports = router;