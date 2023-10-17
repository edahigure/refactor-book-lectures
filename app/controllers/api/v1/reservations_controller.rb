class Api::V1::ReservationsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @user = User.includes(:reservations).find(params[:user_id])

    respond_to do |format|
      format.json { render json: @user.reservations }
    end
  end

  def create
    
    @user = User.find(params[:user_id])
    @lecture = Lecture.find(params[:reservation][:lecture_id]) 
    @reservation = Reservation.new(reservation_params)

    @reservation = Reservation.new(
      user: @user,
      lecture: @lecture,
      date: reservation_params[:date],
      place: reservation_params[:place],
      payment: reservation_params[:payment],
      paid: reservation_params[:paid],
      cancelled: reservation_params[:cancelled]
    )
    
    if @reservation.save
      render json: @reservation, status: :created
    else
      render json: @reservation.errors, status: :unprocessable_entity
    end
  end

  def destroy

    @lecture = Reservation.find(params[:id])
    @lecture.destroy

    respond_to do |format|
      format.html { redirect_to root_url, notice: 'Lecture was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  def reservation_params
    params.require(:reservation).permit(:user_id, :lecture_id, :date, :place, :payment, :paid, :cancelled)
  end

end 