const propTypes = {
  tasks: React.PropTypes.array,
  task: React.PropTypes.object,
  description: React.PropTypes.string,
  completed: React.PropTypes.bool,
  handleUpdateTask: React.PropTypes.func,
  addTask: React.PropTypes.func
};

const defaultProps = {
  tasks: [],
  task: {
    description: 'Book vacation',
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

    this.addTask = this.addTask.bind(this);
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

  addTask(task) {
    const newTaskList = this.state.tasks;
    newTaskList.push(task);
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
              <Title />
              <TaskList tasks={this.state.tasks} />
              <TaskForm 
                handleNewTask={this.addTask}
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
