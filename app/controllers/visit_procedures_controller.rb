class VisitProceduresController < ApplicationController
  before_action :set_visit_procedure, only: [:show, :edit, :update, :destroy]

  # GET /visit_procedures
  # GET /visit_procedures.json
  def index
    @visit_procedures = VisitProcedure.all
  end

  # GET /visit_procedures/1
  # GET /visit_procedures/1.json
  def show
  end

  # GET /visit_procedures/new
  def new
    @visit_procedure = VisitProcedure.new
  end

  # GET /visit_procedures/1/edit
  def edit
  end

  # POST /visit_procedures
  # POST /visit_procedures.json
  def create
    @visit_procedure = VisitProcedure.new(visit_procedure_params)

    respond_to do |format|
      if @visit_procedure.save
        format.html { redirect_to @visit_procedure, notice: 'Visit procedure was successfully created.' }
        format.json { render :show, status: :created, location: @visit_procedure }
      else
        format.html { render :new }
        format.json { render json: @visit_procedure.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visit_procedures/1
  # PATCH/PUT /visit_procedures/1.json
  def update
    respond_to do |format|
      if @visit_procedure.update(visit_procedure_params)
        format.html { redirect_to @visit_procedure, notice: 'Visit procedure was successfully updated.' }
        format.json { render :show, status: :ok, location: @visit_procedure }
      else
        format.html { render :edit }
        format.json { render json: @visit_procedure.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visit_procedures/1
  # DELETE /visit_procedures/1.json
  def destroy
    @visit_procedure.destroy
    respond_to do |format|
      format.html { redirect_to visit_procedures_url, notice: 'Visit procedure was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visit_procedure
      @visit_procedure = VisitProcedure.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visit_procedure_params
      params.require(:visit_procedure).permit(:visit_id, :patient_id, :procedure_id)
    end
end
