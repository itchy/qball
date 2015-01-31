require 'test_helper'

class VisitRecordsControllerTest < ActionController::TestCase
  setup do
    @visit_record = visit_records(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:visit_records)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create visit_record" do
    assert_difference('VisitRecord.count') do
      post :create, visit_record: { data: @visit_record.data, patient_id: @visit_record.patient_id, visit_id: @visit_record.visit_id }
    end

    assert_redirected_to visit_record_path(assigns(:visit_record))
  end

  test "should show visit_record" do
    get :show, id: @visit_record
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @visit_record
    assert_response :success
  end

  test "should update visit_record" do
    patch :update, id: @visit_record, visit_record: { data: @visit_record.data, patient_id: @visit_record.patient_id, visit_id: @visit_record.visit_id }
    assert_redirected_to visit_record_path(assigns(:visit_record))
  end

  test "should destroy visit_record" do
    assert_difference('VisitRecord.count', -1) do
      delete :destroy, id: @visit_record
    end

    assert_redirected_to visit_records_path
  end
end
