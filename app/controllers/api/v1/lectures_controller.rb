class Api::V1::LecturesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def index
    @lectures = Lecture.all
    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@lectures.as_json) }
    end
  end

  def show
    @lecture = Lecture.find(params[:id])
    respond_to do |format|
      format.json { render json: JSON.pretty_generate(@lecture.as_json) }
    end
  end

  def create
    @lecture = Lecture.new(
      name: lecture_params[:name],
      image_url: lecture_params[:image_url],
      description: lecture_params[:description],
      web_link: lecture_params[:web_link],
      price: lecture_params[:price],
      cancelled: lecture_params[:price],
      teacher_id: lecture_params[:teacher_id],
    )

    if @lecture.save
      respond_to do |format|
        format.json { render json: JSON.pretty_generate(@lecture.as_json), status: :created }
      end
    else
      respond_to do |format|
        format.json do
          render json: JSON.pretty_generate(@lecture.errors.full_messages.as_json), status: :unprocessable_entity
        end
      end
    end
  end

  def destroy

    @lecture = Lecture.find(params[:id])
    @lecture.destroy

    respond_to do |format|
      format.html { redirect_to root_url, notice: 'Lecture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def lecture_params
    params.require(:lecture).permit(:name, :image_url, :description, :web_link, :price, :cancelled, :teacher_id)
  end

  def update
    @lecture = Lecture.find(params[:id])

    if @lecture.update(removed: true)
      respond_to do |format|
        format.json { render json: { message: 'Lecture removed successfully' }, status: :ok }
      end
    else
      respond_to do |format|
        format.json { render json: { message: 'Unable to remove lecture' }, status: :unprocessable_entity }
      end
    end
  end
end

