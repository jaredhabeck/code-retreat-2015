require "rspec"
require "./game.rb"

describe Game do
  subject { described_class.new }
  it { is_expected.not_to be_nil }

  context "state" do
    subject { described_class.new.state }
    it { is_expected.to be_kind_of State }
  end
end

describe State do
  subject { described_class.new }
  it { is_expected.not_to be_nil }

  context "game board" do
    let(:seed) { 3 }
    subject { described_class.new.game_board }
    it { is_expected.to be_kind_of Array }

    context "defaults to 3 rows of 3 columns" do
      subject { described_class.new(seed: seed).game_board }

      it { expect(subject.length).to eq(seed) }
      it { subject.each { |row| expect(row.length).to eq(seed) } }
    end

    context "renders a grid of cells" do
      subject { described_class.new(seed: seed).render }

      it { is_expected.to eq "000\n000\n000\n"}
    end
  end
end
