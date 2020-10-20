class ListsController < ApplicationController

    def index
        @lists = List.all
        render json: @lists.as_json(include: {list_items: {only:[:content]}}) 
    end

    def show
        @list = List.find_by[:id params[:id]]
        render json: @list.as_json(include: {list_items: {only:[:content]}}) 
    end
end
 