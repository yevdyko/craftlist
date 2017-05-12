class TaskApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.data
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6 col-md-offset-3">
            <Title />
            <TaskList tasks={this.state.tasks} />
            <TaskForm />
          </div>
        </div>
      </div>
    );
  }
}
