class ListsController < ApplicationController

    def index
        @lists = List.all
        render json: @lists.as_json() 
    end
end
 