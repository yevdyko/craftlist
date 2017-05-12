# Craftlist

[![Build Status](https://travis-ci.org/yevdyko/craftlist.svg?branch=master)](https://travis-ci.org/yevdyko/craftlist)  [![Coverage Status](https://coveralls.io/repos/github/yevdyko/craftlist/badge.svg?branch=master)](https://coveralls.io/github/yevdyko/craftlist?branch=master)  [![Code Climate](https://codeclimate.com/github/yevdyko/craftlist/badges/gpa.svg)](https://codeclimate.com/github/yevdyko/craftlist)

A task management system built using Ruby on Rails with ReactJS.

## Technologies used

- PostgreSQL database
- Ruby 2.4.1
- Ruby on Rails 5.1
- ES6 JavaScript
- ReactJS
- Bootstrap
- Slim/SCSS
- Tested with RSpec and Capybara

## Setup

Clone the repository:

    $ git clone git@github.com:yevdyko/craftlist.git

Change into the directory:

    $ cd craftlist

If you don't have bundle already, run the command:

    $ gem install bundle

Install the local gems while suppressing the installation of production gems using the `--without production` option:

    $ bundle install --without production

Create development and test databases:

    $ rake db:create

Run the migrations to setup the database:

    $ rake db:migrate

Start the server:

    $ rails server

Go to your browser and open [http://localhost:3000](http://localhost:3000)

## Testing

Setup the test database using the rake task:

    $ rake db:migrate RACK_ENV=test

To run the tests:

    $ rspec
