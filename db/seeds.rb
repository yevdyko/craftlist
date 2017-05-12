1.upto(5) do |i|
  Task.create(description: "It's a sample task with description #{i}",
              completed: false)
end
