class TaskList extends React.Component {
  renderItems() {
    return this.props.tasks.map((task, index) => {
      return <TaskItem key={index} {...task} />;
    });    
  }

  render() {
    return (
      <ul className="task__list">
        {this.renderItems()}
      </ul>
    );
  }
}
