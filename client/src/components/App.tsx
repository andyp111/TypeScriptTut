import * as React from "react";
import { FC, useState, ChangeEvent } from 'react';
import { ITask } from './Interfaces'
import {TodoTask} from './TodoTask';




export const App: FC = () => {
    const [task, setTask] = useState<string>('');
    const [deadline, setDeadline] = useState<number>(0);
    const [todoList, setTodoList] = useState<ITask[]>([]);



    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        if (event.target.name === "task") setTask(event.target.value);
        if (event.target.name === "deadline") setDeadline(Number(event.target.value));
    }

    const addTask = (): void => {
        const newTask = {
            taskName: task,
            deadline: deadline
        }
        setTodoList([...todoList, newTask]);
        console.log(todoList);
        setTask('');
        setDeadline(0)
    }
    return (
        <div className="app">
            <div className="header"></div>
            <div className="inputContainer">
                <input
                    type="text"
                    placeholder="Task..."
                    name="task"
                    value={task}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Deadling (in Days)..."
                    name="deadline"
                    value={deadline}
                    onChange={handleChange}
                />
            </div>
            <button>Add Task</button>
            <div className="todoList">
                {todoList.map((task: ITask, key: number) => {
                    return <TodoTask key={key} task={task}/>
                })}
            </div>
        </div>
    );
};
