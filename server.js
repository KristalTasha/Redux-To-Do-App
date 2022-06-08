const express = require('express')
const cors = require('cors');
const {
    v4: uuidv4
} = require('uuid')
const PORT = process.env.PORT || 7070

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}))

app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000',
    methods: 'GET, POST, PUT, DELETE'
}));

// app.use(cors());

let tid = 1;
let taskID = tid.toString()
console.log(taskID)

let tasks = [{
        id: `${taskID++}`,
        text: 'eat',
        isCompleted: false
    },

    {
        id: `${taskID++}`,
        text: 'work',
        isCompleted: false
    },

    {
        id: `${taskID++}`,
        text: 'buy rice',
        isCompleted: true
    },

]

app.get('/todos', (req, res) => {
    res.status(200).json(tasks);
})

app.post('/addTodos', (req, res) => {
    try{
        const {
            text
        } = req.body

        let TID = tasks.length - 1
        let lastID = tasks[TID].id
        let newID = parseInt(lastID) + 1
    
        if (text) {
            const newTodo = {
                id: `${newID++}`,
                text: text,
                isCompleted: false
            }
    
            tasks.push(newTodo);
            res.status(200).json(newTodo)
        } else {
            res.status(400).json({
                message: 'Input text please'
            })
        }
    }catch(error){
        res.status(400).json({
            message: 'Unable to add new todo',
            error
        })
    
    }
    
})

app.delete('/deleteTodo/:id', (req, res) => {

    try {
       let todoId = req.params.id;
       console.log('id being deleted', todoId)


        tasks = tasks.filter(task => task.id !== todoId)

        console.log('remainder', tasks)
        res.status(200).json(tasks)

    } catch (error) {
        res.status(400).json({
            message: 'Unable to delete',
            error
        })
    }


})

app.put('/updateTodo/:id', (req, res) => {

    const { id } = req.params;

    // const matchTodo = tasks.find(task => task.id === id)

    tasks = tasks.map(item => {
        return item.id === id ? {...item, isCompleted: !item.isCompleted} : {...item}
    })

    console.log(tasks)

    res.status(200).json(tasks);

   
  


})

app.listen(PORT, () => console.log(`server listening on port ${PORT}`))





    // try{
    //     // const {
    //     //     text
    //     // } = req.body;
    
    //    let todoId = req.params.id;
    
    //     if (text) {
    //         const item = tasks.find(task => {
    //             return task.id === todoId 
    //         })

    //         console.log('item', item)
    
    //         let itemIdx = tasks.indexOf(item)
    //         console.log(itemIdx)
    
    //         const updated = {
    //             id: itemIdx,
    //             text,
    //             isCompleted: false
    //         }
    
    //         tasks.splice(itemIdx, 1, updated)
    //         res.status(200).json({message: 'successfully updated', updated, new: true})
    //     }
        
    
    // } catch(error){
    //     res.status(400).json({
    //         message: 'Unable to update',
    //         error
    //     })
    // }