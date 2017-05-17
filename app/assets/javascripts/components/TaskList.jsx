function TaskList(props) {
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
