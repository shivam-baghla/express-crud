const express = require('express');
const app = express();

// app.get(endpoint, callback)

let tasks = [
    {
        id: 0,
        name: 'Create app'
    },
    {
        id: 1,
        name: 'update app'
    }
];
app.get("/", (req, res) => {
    console.log('request came')
    res.send('use /tasks');
})

// /tasks will return all the tasks
app.get("/tasks", (req, res) => {
    console.log('request came')
    res.send(tasks);
})

// /tasks/{:id} will return task having index = id
app.get("/tasks/:id", (req, res) => {
    console.log('request came')
    res.send(tasks[req.params.id]);
})


//post -> add record
//put -> update by replacing complete object
//patch -> update my modifying object
//delete -> delete a record


app.listen(3000, function() {
    console.log('listening on 3000')
})