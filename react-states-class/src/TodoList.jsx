import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){
     let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4() }]);
    let[newTodo, setNewTodo] = useState("");   
    
    let addNewTask = () => {
       setTodos([...todos, {task: newTodo, id: uuidv4()}]);
         setNewTodo("");
    };

    let updateTodoValue = (event)=>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    let upperCaseAll = () => {
        const upperCasedTodos = todos.map((todo) => ({
            ...todo,
            task: todo.task.toUpperCase()
        }));
        setTodos(upperCasedTodos);
    };

    let upperCaseOne = (id) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {   
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                };
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <div> 
            <input 
            placeholder="add a task"
            value={newTodo} 
            onChange={updateTodoValue}
            ></input>

            <button onClick={addNewTask}>Add Task</button>
            <br></br><br></br><br></br>


            <h1>Todo List</h1>
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id}>
                           <span> {todo.task}</span>
                           &nbsp;
                           <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                           <button onClick={() => upperCaseOne(todo.id)}>Uppercase One</button>
                       
                        </li>
                    ))
                }
            </ul>
            <button onClick={upperCaseAll}>UpperCaseAll</button>
        </div>
    )
}

