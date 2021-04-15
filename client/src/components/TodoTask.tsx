import * as React from 'react';
import { FC } from 'react';
import { ITask } from './Interfaces';

interface Props {
    task: ITask;

}

export const TodoTask = ({task}: Props) => {
    return (
        <div>
            {task.taskName} {task.deadline}
        </div>
    )
}

