class WelcomeController < ApplicationController
  def index
  end
  
  def newoffer
    require 'pp'
    offer = Offer.new
    offer.challenge = params["challenge"]
    offer.requirement = params["requirement"]
    offer.budget = params["budget"]
    offer.organization = params["organization"]
    offer.name = params["name"]
    offer.email = params["email"]
    offer.phone = params["phone"]
    offer.save
    respond_to do |format|
      format.js
    end
  end
end
