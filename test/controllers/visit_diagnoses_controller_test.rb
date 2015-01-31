require 'test_helper'

class VisitDiagnosesControllerTest < ActionController::TestCase
  setup do
    @visit_diagnosis = visit_diagnoses(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:visit_diagnoses)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create visit_diagnosis" do
    assert_difference('VisitDiagnosis.count') do
      post :create, visit_diagnosis: { diagnosis_id: @visit_diagnosis.diagnosis_id, patient_id: @visit_diagnosis.patient_id, visit_id: @visit_diagnosis.visit_id }
    end

    assert_redirected_to visit_diagnosis_path(assigns(:visit_diagnosis))
  end

  test "should show visit_diagnosis" do
    get :show, id: @visit_diagnosis
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @visit_diagnosis
    assert_response :success
  end

  test "should update visit_diagnosis" do
    patch :update, id: @visit_diagnosis, visit_diagnosis: { diagnosis_id: @visit_diagnosis.diagnosis_id, patient_id: @visit_diagnosis.patient_id, visit_id: @visit_diagnosis.visit_id }
    assert_redirected_to visit_diagnosis_path(assigns(:visit_diagnosis))
  end

  test "should destroy visit_diagnosis" do
    assert_difference('VisitDiagnosis.count', -1) do
      delete :destroy, id: @visit_diagnosis
    end

    assert_redirected_to visit_diagnoses_path
  end
end
