class HomeController < ApplicationController
  # respond_to has been moved to the responders gem, what's the best approach?
  # respond_to :json, only: [:hello]

  def index
  end

  def hello
    # byebug
    respond_to do |wants|
      wants.json { render json: {hello: 'world'} }
    end
  end
end
