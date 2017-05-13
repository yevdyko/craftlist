const propTypes = {
  handleSubmit: React.PropTypes.func
};

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let that = this;
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: { task: that.props.task },
      success: function(data) {
        that.props.handleNewTask(data);
        that.setState({
          task: {
            description: '',
            completed: false
          }
        });
      },
      error: function(xhr, status, error) {
        alert('Cannot add a new task: ', status, xhr, error);
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
