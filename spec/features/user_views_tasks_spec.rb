require 'rails_helper'

feature 'User views tasks' do
  scenario 'can see an app title on the homepage', js: true do
    visit root_path

    expect(page).to have_content t('tasks.title')
  end

  scenario 'displays a prompt to add a task', js: true do
    visit root_path

    expect(page).to have_button t('tasks.new')
  end

  scenario 'can see all tasks on the homepage', js: true do
    create_list(:task, 5)
    
    visit root_path
    
    expect(page).to have_displayed_tasks(5)
  end

  def have_displayed_tasks(count)
    have_css('.task__list .task__item', count: count)
  end
end
