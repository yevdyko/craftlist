require 'rails_helper'

feature 'User creates a task' do
  given(:text) { build :task }

  # As a User 
  # So that I can create a new task to my Craftlist
  # I want to view a prompt to add a task
  scenario 'can view a prompt to add a task', js: true do
    visit root_path

    expect(page).to have_button t('tasks.new')
  end

  # As a User
  # So that I can not forget what I need to do
  # I want to create tasks on Craftlist
  scenario 'can add a new task', js: true do
    visit root_path

    create_task_with_description text
    
    expect(page).to have_description text 
  end


  def create_task_with_description(text)
    fill_in t('tasks.input'), with: text.description
    click_button t('tasks.new')
  end
  
  def have_description(text)
    have_css('.cr-task__list .cr-task__item', text: text.description)
  end
end
