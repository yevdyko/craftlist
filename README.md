# Craftlist

[![Build Status](https://travis-ci.org/yevdyko/craftlist.svg?branch=master)](https://travis-ci.org/yevdyko/craftlist)  [![Coverage Status](https://coveralls.io/repos/github/yevdyko/craftlist/badge.svg?branch=master)](https://coveralls.io/github/yevdyko/craftlist?branch=master)  [![Code Climate](https://codeclimate.com/github/yevdyko/craftlist/badges/gpa.svg)](https://codeclimate.com/github/yevdyko/craftlist)

A task management system built using Ruby on Rails with ReactJS.

The basic requirements were that system should be a single user application and userss should be able to see a list of all their tasks. 

Each task can have several subtasks, the level of nesting of subtasks is not limited, e.g. you can have 100 levels of nested tasks.

The user is able to mark a task as complete by clicking on the checkbox located on the right side of the page. When the task is completed, all of its subtasks (and the subtasks of the subtasks) should also be completed. The process of the task completion should be asynchronous (AJAX). The results of the task completion and the task position in the list should be stored in the database and restored after the page reload. 

The user should be able to change the ordering of the tasks using Drag & Drop. To add a subtask the user needs to add a task to the root and then Drag & Drop it to the right place.

## Implemented features

- Adding tasks to the end of the list without page reload
- Storing tasks in the database and restoring them after the page reload
- Showing completed/incompleted tasks

## The most interesting parts

1. [Root component](https://github.com/yevdyko/craftlist/blob/master/app/assets/javascripts/components/TaskApp.jsx) that encapsulates app's logic, stores and and manages app's state
2. [Tasks controller](https://github.com/yevdyko/craftlist/blob/master/app/controllers/tasks_controller.rb) that gets requests from client and sends responses back
3. [Tasks controller spec](https://github.com/yevdyko/craftlist/blob/master/spec/controllers/tasks_controller_spec.rb)
4. [Features specs](https://github.com/yevdyko/craftlist/tree/master/spec/features)

## Technologies used

- PostgreSQL database
- Ruby 2.4.1
- Ruby on Rails 5.1
- ES6 JavaScript
- ReactJS
- jQuery for AJAX
- Bootstrap
- Slim/SCSS
- Tested with RSpec and Capybara

## Setup

Clone the repository:

    $ git clone git@github.com:yevdyko/craftlist.git

Change into the directory:

    $ cd craftlist

Setup the app using command:

    $ ./bin/setup

Start the server:

    $ rails server

Go to your browser and open [http://localhost:3000](http://localhost:3000)

## Testing

To run the tests:

    $ rspec

## Todo

- [ ] Add sorting tasks using Drag and Drop 
- [ ] Unlimited Drag and Drop subtasks

## Additional features

- [ ] Add deleting tasks
- [ ] Use Webpacker instead of Asset Pipeline
- [ ] Add tests using Jest
- [ ] Add editing tasks
- [ ] Add searching for tasks
- [ ] Add filtering tasks
