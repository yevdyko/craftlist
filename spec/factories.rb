FactoryGirl.define do
  sequence :description do |n|
    "Description #{n}"
  end
  
  factory :task do
    description
    completed false
  end
end
