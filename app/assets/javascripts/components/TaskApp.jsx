const propTypes = {
  tasks: React.PropTypes.array,
  task: React.PropTypes.object,
  description: React.PropTypes.string,
  completed: React.PropTypes.bool,
  handleSubmit: React.PropTypes.func,
  handleUpdateTask: React.PropTypes.func,
  handleCompleted: React.PropTypes.func,
  handleDelete: React.PropTypes.func
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

    this.handleUpdateTask = this.handleUpdateTask.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
      dataType: 'json',
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
        console.log('Failed to add a new task: ', error);
      }
    });
  }

  handleCompleted(task) {
    let that = this;
    $.ajax({
      type: 'PUT',
      url: `/tasks/${task.id}`,
      data: { task: task },
      dataType: 'json',
      success: function(data) {
        that.markTaskComplete(data);
      },
      error: function(xhr, status, error) {
        console.log('Failed to mark task as complete/incomplete: ', error);
      }
    });
  }

  handleDelete(task) {
    let that = this;
    $.ajax({
      type: 'DELETE',
      url: `/tasks/${task.id}`,
      dataType: 'json',
      success: function() {
        that.deleteTask(task);
      },
      error: function(xhr, status, error) {
        console.log('Failed to delete a task: ', error);
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

  markTaskComplete(task) {
    let tasks = this.state.tasks;
    const taskId = task.id

    const currentTask = tasks.filter((task) => {
      return task.id === taskId;
    })[0];

    currentTask.completed = !currentTask.completed;

    this.setState({
      tasks
    });
  }

  deleteTask(task) {
    const taskId = task.id;

    const newTaskList = this.state.tasks.filter((task) => {
      return task.id !== taskId;
    } )

    this.setState({
      tasks: newTaskList
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-md-offset-3">
            <div className="cr-task">
              <TaskTitle />
              <TaskList
                handleCompleted={this.handleCompleted}
                handleDelete={this.handleDelete}
                tasks={this.state.tasks}
              />
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
 