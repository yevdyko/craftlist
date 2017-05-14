require 'rails_helper'

describe Task, type: :model do
  context 'validations' do
    it { is_expected.to validate_presence_of(:description) }
  end
end
