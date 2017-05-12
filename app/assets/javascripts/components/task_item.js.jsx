class TaskItem extends React.Component {
  render() {
    return (
      <li className="task__item">
        {this.props.description}
      </li>
    );
  }
}
