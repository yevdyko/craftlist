require 'rails_helper'

feature 'User creates a task' do
  scenario 'can see an app title on the homepage', js: true do
    visit root_path

    expect(page).to have_content t('tasks.title')
  end
end
