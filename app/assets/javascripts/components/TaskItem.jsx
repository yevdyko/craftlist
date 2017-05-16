class TaskItem extends React.Component {
  render() {
    let task = this.props.task;
    let description = task.description;
    let _style = 'line-through';

    if (!task.completed) {
      _style = 'none';
    }

    return (
      <li className="cr-task__item">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={this.props.handleCompleted.bind(null, description)}
        />
        <span className="cr-task__text" style={{'textDecoration': _style}}>
          {task.description}
        </span>
      </li>
    );
  }
}
