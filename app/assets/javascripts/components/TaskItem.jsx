class TaskItem extends React.Component {
  render() {
    let task = this.props.task;
    let _style = 'line-through';

    if (!task.completed) {
      _style = 'none';
    }

    return (
      <li className="cr-task__item">
        <button
          className="btn btn-delete pull-right"
          onClick={this.props.handleDelete.bind(null, task)}
        >
          <span className="glyphicon glyphicon-remove cr-icon-remove"></span>
        </button>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={this.props.handleCompleted.bind(null, task)}
        />
        <span className="cr-task__text" style={{'textDecoration': _style}}>
          {task.description}
        </span>
      </li>
    );
  }
}
