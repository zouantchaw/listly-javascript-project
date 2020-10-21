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
        @list = List.new(list_params)
        if @list.save
            render json: @list.as_json(include: {list_items: {only:[:content]}}) 
        else 
            render json: @list.errors, status: :unprocessable_entity
        end
    end

    def update
        @list = List.find_by(id: params[:id])
        if @list.update(list_params)
            render json: @list.as_json(include: {list_items: {only:[:content]}}) 
        else 
            render json: @list.errors, status: :unprocessable_entity
        end
    end

    private
    def list_params
        params.require(:list).permit(:id, :name)
    end 
end
 