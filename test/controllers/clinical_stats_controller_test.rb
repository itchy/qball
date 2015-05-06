require 'test_helper'

class ClinicalStatsControllerTest < ActionController::TestCase
  setup do
    @clinical_stat = clinical_stats(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:clinical_stats)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create clinical_stat" do
    assert_difference('ClinicalStat.count') do
      post :create, clinical_stat: { json: @clinical_stat.json, string: @clinical_stat.string, uuid: @clinical_stat.uuid }
    end

    assert_redirected_to clinical_stat_path(assigns(:clinical_stat))
  end

  test "should show clinical_stat" do
    get :show, id: @clinical_stat
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @clinical_stat
    assert_response :success
  end

  test "should update clinical_stat" do
    patch :update, id: @clinical_stat, clinical_stat: { json: @clinical_stat.json, string: @clinical_stat.string, uuid: @clinical_stat.uuid }
    assert_redirected_to clinical_stat_path(assigns(:clinical_stat))
  end

  test "should destroy clinical_stat" do
    assert_difference('ClinicalStat.count', -1) do
      delete :destroy, id: @clinical_stat
    end

    assert_redirected_to clinical_stats_path
  end
end
