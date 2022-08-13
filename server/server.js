// server is calling in express
const express = require('express');
//create an express application. "app" is conventional naming
const app = express();
const PORT = 5007;
// const port = process.env.PORT || 5007;

// Express looks in server/public folder for anything we want to display
app.use(express.static('server/public'));
//body parser
app.use(express.urlencoded({ extended: true }));

const router = require('./routes/tasks.router.js');
app.use('/tasks', router);



// test GET
//  app.get('/tasks', (req, res) => {
//     console.log('in GET /tasks')
//     res.send(tasks);
// })
//ROUTERS



//must be at bottom of server.js file
app.listen(PORT, () => {
    console.log('listening on port', PORT);
});