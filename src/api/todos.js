import { Router } from 'express';
import Todo from '../models/todo.model';

const router = Router();

router.get("/", async (req, res, next) =>{
    try{
        const todos = await Todo.find();
        res.json(todos);
    }catch(error){
        next(error)
    }
});

router.get("/:id", async (req, res, next) =>{
    let id = req.params.id;
    try{
        const todo = await Todo.findById(id);
        res.json(todo);
    }catch(error){
        next(error)
    }
});


router.post("/", async (req, res, next) =>{
    try {
        const todoEntry = new Todo(req.body);
        const createdTodo = await todoEntry.save();
        console.log(createdTodo);
        res.json(createdTodo);
    }catch(error){
        if (error.name === "ValidationError"){
            res.status(422);
        }
        next(error)
    }
});

router.post('/update/:id',async(req, res) =>{

    let id = req.params.id;
    try{
    Todo.findById(id).then( (todo) => {
        console.log(todo);
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;

        todo.save();
        res.json(todo)
        })}
            catch(error)  {
                res.status(400)
            }
    });


module.exports = router;
export default router;
