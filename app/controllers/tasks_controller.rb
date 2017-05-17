class TasksController < ApplicationController
  before_action :set_task, only: %i[update destroy]

  def index
    @tasks = Task.all
  end

  def create
    @task = Task.new(task_params)

    if @task.save
      render json: @task, status: :created
    else
      render json: { errors: @task.errors }, status: :unproccesable_entity
    end
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: { errors: @task.errors }, status: :unproccesable_entity
    end
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

    def task_params
      params.require(:task).permit(:description, :completed)
    end

    def set_task
      @task = Task.find(params[:id])
    end
end
