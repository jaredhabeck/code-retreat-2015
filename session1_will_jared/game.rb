# Will and Jared
class Game
  attr_reader :state

  def initialize
    @state = State.new
  end
end

class State
  attr_reader :game_board

  def initialize(seed: 3)
    @game_board = Array.new(seed, Array.new(seed, 0))
  end

  def render
    String.new.tap do |output|
      game_board.each do |row|
        row.each do |cell|
          output << "0"
        end
        output << "\n"
      end
    end
  end
end

# fast end of session "spike", ran off the TDD rails! :(

# class Cell
#   attr_reader :state

#   def initialize(state: :alive)
#     @state = state
#   end


#   def to_s
#     if state == :alive
#       "1"
#     else
#       "0"
#     end
#   end
# end
