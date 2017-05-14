require 'rails_helper'

describe TasksController, type: :controller do
  describe 'POST #create' do
    let(:json) { JSON.parse(response.body) }

    context 'with valid attributes' do
      let(:task_attrs) { attributes_for :task }
      
      before do
        post :create, params: { task: task_attrs }
      end

      it 'creates a new task' do
        expect {
          post :create, params: { task: task_attrs }
        }.to change(Task, :count).by(1)
      end
      
      it 'returns 201 as status code' do
        expect(response).to have_http_status(:created)
      end
    end

    context 'with invalid attributes' do
      let(:invalid_task_attrs) { attributes_for(:task, description: nil) }

      before do
        post :create, params: { task: invalid_task_attrs }
      end

      it 'does not save the new task' do
        expect {
          post :create, params: { task: invalid_task_attrs }
        }.to_not change(Task, :count)
      end

      it 'returns error message' do
        task = build(:task, description: nil)
        task.validate

        expect(json['errors']).to eq(task.errors.messages.as_json)
      end
    end
  end
end
