import React from 'react';
import TaskItem from './TaskItem';

const TaskList = (props) => {
  return (
    <ul className="cr-task__list">
      {props.tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleCompleted={props.handleCompleted}
          handleDelete={props.handleDelete}
        />
      ))}
    </ul>
  );
}

export default TaskList;
