class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.text :description
      t.boolean :completed

      t.timestamps
    end
  end
end
