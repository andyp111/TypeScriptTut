import * as React from "react";
import { FC, useState, ChangeEvent } from 'react';
import { GroceryList } from "./GroceryList";
import { GroceryItems } from './GroceryItems';



export const App: FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todo, setTodoList] = useState([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") setTask(event.target.value);
        if (event.target.name === "deadline") setDeadline(Number(event.target.value));
    }

    const addTask = (): void => {

    }
    return (
        <div className="app">
            <div className="header"></div>
            <div className="inputContainer">
                <input type="text" placeholder="Task..." name="task" onChange={handleChange} />
                <input
                    type="number" 
                    placeholder="Deadling (in Days)..."
                    name="deadline" 
                    onChange={handleChange}
                />
            </div>
            <button>Add Task</button>
            <div className="todoList"></div>
        </div>
    );
};
