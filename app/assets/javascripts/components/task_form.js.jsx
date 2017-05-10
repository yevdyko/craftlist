class TaskForm extends React.Component {
  render() {
    return (
      <form className="form-inline">
        <div className="form-group">
          <input type="text" 
                 className="form-control"
                 name="description" 
                 placeholder="New task" />
        </div>
        <button type="submit" className="btn btn-default">Add task</button>
      </form>
    );
  }
}
