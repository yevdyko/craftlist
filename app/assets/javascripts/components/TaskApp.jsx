const propTypes = {
  tasks: React.PropTypes.array,
  task: React.PropTypes.object,
  description: React.PropTypes.string,
  completed: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func,
  handleUpdateTask: React.PropTypes.func
};

const defaultProps = {
  tasks: [],
  task: {
    description: '',
    completed: false
  }
};

class TaskApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.data,
      task: {
        description: '',
        completed: false
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUpdateTask = this.handleUpdateTask.bind(this);
  }

  handleUpdateTask(event) {
    this.setState({
      task: {
        description: event.target.value,
        completed: false
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let that = this;
    $.ajax({
      type: 'POST',
      url: '/tasks',
      data: { task: that.state.task },
      success: function(data) {
        that.addTask(data);
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

  addTask(task) {
    const newTaskList = this.state.tasks.concat([task]);
    this.setState({
      tasks: newTaskList,
      task: {
        description: '',
        completed: false
      }
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-md-offset-3">
            <div className="cr-task">
              <TaskTitle />
              <TaskList tasks={this.state.tasks} />
              <TaskForm 
                handleSubmit={this.handleSubmit}
                handleUpdateTask={this.handleUpdateTask}
                task={this.state.task} 
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskApp.propTypes = propTypes;
TaskApp.defaultProps = defaultProps;
