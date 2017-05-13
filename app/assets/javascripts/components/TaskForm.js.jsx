class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.handleNewTask(
      this.props.task
    );

    this.setState({
      task: {
        description: '',
        completed: false
      }
    });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            className="form-control cr-form-control"
            placeholder="New task"
            name="description" 
            value={this.props.task.description}
            onChange={this.props.handleUpdateTask} 
          />
        </div>
        <button type="submit" className="btn btn-add">
          Add task
        </button>
      </form>
    );
  }
}
