function TaskList(props) {
  return (
    <ul className="cr-task__list">
      {props.tasks.map((task, index) => (
        <TaskItem 
          key={index} 
          {...task} 
        />
      ))}
    </ul>
  );
}
