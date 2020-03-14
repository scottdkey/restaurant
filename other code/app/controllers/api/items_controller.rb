class Api::ItemsController < ApplicationController
  def index
    render json: Item.all
  end

  def create
    # do stuff
    puts 'params'
    puts params
    item = Item.new(item_params)
    if (item.save)
      render json: item
    else 
      render json: {errors: item.errors}
    end
  end

  def update 
    item = Item.find(params[:id])
    item.update(item_params)
    render json: item
  end

  def destroy

  end

  private
  def item_params
    params.require(:item).permit(:name, :complete)
  end

end
