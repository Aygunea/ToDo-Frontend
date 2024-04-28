import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'
const ToDo = () => {
    const todoRef = useRef();
    const [todos, setTodos] = useState([]);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // const title = todoRef.current.value.trim();
        // const newTodo = { title }
        // if (!title) return;
        // console.log(title);
        // const response = await fetch("/api/todos", {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(newTodo), 
        // })
        // // const data = await response.json()
        // console.log(response);
        // try {
        //     const response = await fetch("/api/todos", {
        //         method: 'POST',
        //         headers: {
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({ title })
        //     });
        //     if (response.ok) {
        //         await getTodos();
        //         todoRef.current.value = '';
        //     } else {
        //         // Handle error if needed
        //         console.error('Error adding todo:', response.status);
        //     }
        // } catch (error) {
        //     console.error('Error adding todo:', error);
        // }
    }

    // const getAllTodos = async () => {
    //     try {
    //         const response = await fetch("/api/todos");
    //         // const data = await response.json();
    //         // setTodos(data);
    //         console.log(await response.json()); 
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // const getAllTodos = async () => {
    //     await axios.get("/api/todos").then((data) => {
    //         console.log(data.data);
    //     })
    // }
    const getAllTodos = async () => {
        try {
            // const response = await fetch("/api/todos")
            // const data = await response.json()
            // console.log(data);
            const response = await axios.get("/api/todos");
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        }
    }

    useEffect(() => {
        getAllTodos();
    }, []);

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input ref={todoRef} type="text" placeholder='Add Task' />
                <button type="submit">Create</button>
            </form>
            <div className="todolist">
                {/* {todos.length === 0 ? (
                    <div>No Todo</div>
                ) : (
                    <div>
                        {todos.map((todo, index) => {
                            return <div key={index}>{todo.title}</div>
                        })}
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default ToDo;
