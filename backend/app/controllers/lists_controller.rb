class ListsController < ApplicationController

    def index
        @lists = List.all
        render json: @lists.as_json(include: {list_items: {only:[:content]}}) 
    end

    def show
        @list = List.find_by(id: params[:id])
        render json: @list.as_json(include: {list_items: {only:[:content]}}) 
    end

    def create
        @list = List.new()
    end

    private
    def list_params
        params.require(:list).permit(:id, :name)
    end 
end
 