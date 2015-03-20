class ClinicalStatsController < ApplicationController
  before_action :set_clinical_stat, only: [:show, :edit, :update, :destroy]

  # GET /clinical_stats
  # GET /clinical_stats.json
  def index
    @clinical_stats = ClinicalStat.all
  end

  # GET /clinical_stats/1
  # GET /clinical_stats/1.json
  def show
  end

  # GET /clinical_stats/new
  def new
    @clinical_stat = ClinicalStat.new
  end

  # GET /clinical_stats/1/edit
  def edit
  end

  # POST /clinical_stats
  # POST /clinical_stats.json
  def create
    @clinical_stat = ClinicalStat.new(clinical_stat_params)

    respond_to do |format|
      if @clinical_stat.save
        format.html { redirect_to @clinical_stat, notice: 'Clinical stat was successfully created.' }
        format.json { render :show, status: :created, location: @clinical_stat }
      else
        format.html { render :new }
        format.json { render json: @clinical_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /clinical_stats/1
  # PATCH/PUT /clinical_stats/1.json
  def update
    respond_to do |format|
      if @clinical_stat.update(clinical_stat_params)
        format.html { redirect_to @clinical_stat, notice: 'Clinical stat was successfully updated.' }
        format.json { render :show, status: :ok, location: @clinical_stat }
      else
        format.html { render :edit }
        format.json { render json: @clinical_stat.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /clinical_stats/1
  # DELETE /clinical_stats/1.json
  def destroy
    @clinical_stat.destroy
    respond_to do |format|
      format.html { redirect_to clinical_stats_url, notice: 'Clinical stat was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_clinical_stat
      @clinical_stat = ClinicalStat.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def clinical_stat_params
      params.require(:clinical_stat).permit(:string, :uuid, :json)
    end
end
