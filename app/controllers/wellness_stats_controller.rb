class WellnessStatsController < ApplicationController
  before_action :set_wellness_stat, only: [:show, :edit, :update, :destroy]

  # GET /wellness_stats
  # GET /wellness_stats.json
  def index
    @wellness_stats = WellnessStat.all
  end

  # GET /wellness_stats/1
  # GET /wellness_stats/1.json
  def show
  end

  # GET /wellness_stats/new
  def new
    @wellness_stat = WellnessStat.new
  end

  # GET /wellness_stats/1/edit
  def edit
  end

  # POST /wellness_stats
  # POST /wellness_stats.json
  def create
    @wellness_stat = WellnessStat.new(wellness_stat_params)

    respond_to do |format|
      if @wellness_stat.save
        format.html { redirect_to @wellness_stat, notice: 'Wellness stat was successfully created.' }
        format.json { render :show, status: :created, location: @wellness_stat }
      else
        format.html { render :new }
        format.json { render json: @wellness_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /wellness_stats/1
  # PATCH/PUT /wellness_stats/1.json
  def update
    respond_to do |format|
      if @wellness_stat.update(wellness_stat_params)
        format.html { redirect_to @wellness_stat, notice: 'Wellness stat was successfully updated.' }
        format.json { render :show, status: :ok, location: @wellness_stat }
      else
        format.html { render :edit }
        format.json { render json: @wellness_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /wellness_stats/1
  # DELETE /wellness_stats/1.json
  def destroy
    @wellness_stat.destroy
    respond_to do |format|
      format.html { redirect_to wellness_stats_url, notice: 'Wellness stat was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_wellness_stat
      @wellness_stat = WellnessStat.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def wellness_stat_params
      params.require(:wellness_stat).permit(:string, :uuid, :json)
    end
end
