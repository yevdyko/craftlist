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

class App extends React.Component {
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
  
  makeAjaxCall(type, url, params, successCallback, errorMessage) {
    $.ajax({
      type: type,
      url: url,
      data: {
        task: params
      },
      dataType: 'json',
      success: function(data) {
        console.log('data: ', data);
        successCallback(data);
      },
      error: function(xhr, status, error) {
        console.log(errorMessage, error);
      }
    });
  }

  
  handleSubmit(event) {
    event.preventDefault();
    
    let that = this;
    const url = '/tasks';
    const params = that.state.task;
    const errorMessage = 'Failed to add a new task: ';
    const successCallback = (data) => {
      that.addTask(data);
      that.setState({
        task: {
          description: '',
          completed: false
        }
      });
    };
    
    that.makeAjaxCall('POST', url, params, successCallback, errorMessage);
  }
  
  handleCompleted(task) {
    event.preventDefault();
    
    let that = this;
    const url = `/tasks/${task.id}`;
    const params = task;
    const errorMessage = 'Failed to mark task as complete/incomplete: ';

    const successCallback = () => {
      that.markTaskComplete(task);
    };
    
    that.makeAjaxCall('PUT', url, params, successCallback, errorMessage);
  }

  handleDelete(task) {
    event.preventDefault();
    
    let that = this;
    const url = `/tasks/${task.id}`;
    const errorMessage = 'Failed to delete a task: ';
    const successCallback = () => {
      that.deleteTask(task);
    };
    
    that.makeAjaxCall('DELETE', url, {}, successCallback, errorMessage);
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

    this.setState({ tasks });
  }

  deleteTask(task) {
    const taskId = task.id;

    const newTaskList = this.state.tasks.filter((task) => {
      return task.id !== taskId;
    });

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

App.propTypes = propTypes;
App.defaultProps = defaultProps;
