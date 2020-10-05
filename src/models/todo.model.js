import mongoose from 'mongoose';
import {Schema} from 'mongoose';

let TodoSchema = new Schema({
    todo_description: {
        type: String,
    },

    todo_responsible: {
        type: String,
    },

    todo_priority: {
        type: String,
    },

    todo_completed:{
        type: Boolean,
    }
});
const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;
