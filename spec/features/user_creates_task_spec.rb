require 'rails_helper'

feature 'User creates a task' do
  scenario 'can see an app title on the homepage', js: true do
    visit root_path

    expect(page).to have_content t('tasks.title')
  end

  scenario 'displays a prompt to add a task', js: true do
    visit root_path

    expect(page).to have_button t('tasks.new')
  end
end
