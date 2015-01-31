require 'test_helper'

class VisitProceduresControllerTest < ActionController::TestCase
  setup do
    @visit_procedure = visit_procedures(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:visit_procedures)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create visit_procedure" do
    assert_difference('VisitProcedure.count') do
      post :create, visit_procedure: { patient_id: @visit_procedure.patient_id, procedure_id: @visit_procedure.procedure_id, visit_id: @visit_procedure.visit_id }
    end

    assert_redirected_to visit_procedure_path(assigns(:visit_procedure))
  end

  test "should show visit_procedure" do
    get :show, id: @visit_procedure
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @visit_procedure
    assert_response :success
  end

  test "should update visit_procedure" do
    patch :update, id: @visit_procedure, visit_procedure: { patient_id: @visit_procedure.patient_id, procedure_id: @visit_procedure.procedure_id, visit_id: @visit_procedure.visit_id }
    assert_redirected_to visit_procedure_path(assigns(:visit_procedure))
  end

  test "should destroy visit_procedure" do
    assert_difference('VisitProcedure.count', -1) do
      delete :destroy, id: @visit_procedure
    end

    assert_redirected_to visit_procedures_path
  end
end
