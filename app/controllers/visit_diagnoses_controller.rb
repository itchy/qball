class VisitDiagnosesController < ApplicationController
  before_action :set_visit_diagnosis, only: [:show, :edit, :update, :destroy]

  # GET /visit_diagnoses
  # GET /visit_diagnoses.json
  def index
    @visit_diagnoses = VisitDiagnosis.all
  end

  # GET /visit_diagnoses/1
  # GET /visit_diagnoses/1.json
  def show
  end

  # GET /visit_diagnoses/new
  def new
    @visit_diagnosis = VisitDiagnosis.new
  end

  # GET /visit_diagnoses/1/edit
  def edit
  end

  # POST /visit_diagnoses
  # POST /visit_diagnoses.json
  def create
    @visit_diagnosis = VisitDiagnosis.new(visit_diagnosis_params)

    respond_to do |format|
      if @visit_diagnosis.save
        format.html { redirect_to @visit_diagnosis, notice: 'Visit diagnosis was successfully created.' }
        format.json { render :show, status: :created, location: @visit_diagnosis }
      else
        format.html { render :new }
        format.json { render json: @visit_diagnosis.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visit_diagnoses/1
  # PATCH/PUT /visit_diagnoses/1.json
  def update
    respond_to do |format|
      if @visit_diagnosis.update(visit_diagnosis_params)
        format.html { redirect_to @visit_diagnosis, notice: 'Visit diagnosis was successfully updated.' }
        format.json { render :show, status: :ok, location: @visit_diagnosis }
      else
        format.html { render :edit }
        format.json { render json: @visit_diagnosis.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visit_diagnoses/1
  # DELETE /visit_diagnoses/1.json
  def destroy
    @visit_diagnosis.destroy
    respond_to do |format|
      format.html { redirect_to visit_diagnoses_url, notice: 'Visit diagnosis was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visit_diagnosis
      @visit_diagnosis = VisitDiagnosis.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visit_diagnosis_params
      params.require(:visit_diagnosis).permit(:visit_id, :patient_id, :diagnosis_id)
    end
end
