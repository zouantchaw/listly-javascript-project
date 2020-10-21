class ListItemsController < ApplicationController

    def destroy
        @list_item = ListItem.find_by(params[:id])
        @list_item.destroy
    end
end
