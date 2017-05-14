function TaskForm(props) {
  return (
    <form className="form-inline cr-form-inline" onSubmit={props.handleSubmit}>
      <input
        type="text"
        className="form-control cr-form-control"
        placeholder="New task"
        name="description"
        value={props.task.description}
        onChange={props.handleUpdateTask}
      />
      <button type="submit" className="btn btn-add">
        Add task
      </button>
    </form>
  );
}
