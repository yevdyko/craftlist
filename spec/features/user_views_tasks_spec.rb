require 'rails_helper'

feature 'User views tasks' do
  # As a User
  # So that I can know the name of app I'm using
  # I want to view an app title
  scenario 'can see an app title on the homepage', js: true do
    visit root_path

    expect(page).to have_content t('tasks.title')
  end

  # As a User
  # So that I can know how many tasks I need to do
  # I want to see a list of tasks
  scenario 'can see all tasks on the homepage', js: true do
    create_list(:task, 5)
    
    visit root_path

    expect(page).to have_displayed_tasks(5)
  end

  def have_displayed_tasks(count)
    have_css('.task__list .task__item', count: count)
  end
end
