class VisitRecordsController < ApplicationController
  before_action :set_visit_record, only: [:show, :edit, :update, :destroy]

  # GET /visit_records
  # GET /visit_records.json
  def index
    @visit_records = VisitRecord.all
  end

  # GET /visit_records/1
  # GET /visit_records/1.json
  def show
  end

  # GET /visit_records/new
  def new
    @visit_record = VisitRecord.new
  end

  # GET /visit_records/1/edit
  def edit
  end

  # POST /visit_records
  # POST /visit_records.json
  def create
    @visit_record = VisitRecord.new(visit_record_params)

    respond_to do |format|
      if @visit_record.save
        format.html { redirect_to @visit_record, notice: 'Visit record was successfully created.' }
        format.json { render :show, status: :created, location: @visit_record }
      else
        format.html { render :new }
        format.json { render json: @visit_record.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /visit_records/1
  # PATCH/PUT /visit_records/1.json
  def update
    respond_to do |format|
      if @visit_record.update(visit_record_params)
        format.html { redirect_to @visit_record, notice: 'Visit record was successfully updated.' }
        format.json { render :show, status: :ok, location: @visit_record }
      else
        format.html { render :edit }
        format.json { render json: @visit_record.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /visit_records/1
  # DELETE /visit_records/1.json
  def destroy
    @visit_record.destroy
    respond_to do |format|
      format.html { redirect_to visit_records_url, notice: 'Visit record was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_visit_record
      @visit_record = VisitRecord.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def visit_record_params
      params.require(:visit_record).permit(:visit_id, :patient_id, :data)
    end
end
