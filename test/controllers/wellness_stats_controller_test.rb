require 'test_helper'

class WellnessStatsControllerTest < ActionController::TestCase
  setup do
    @wellness_stat = wellness_stats(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:wellness_stats)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create wellness_stat" do
    assert_difference('WellnessStat.count') do
      post :create, wellness_stat: { json: @wellness_stat.json, string: @wellness_stat.string, uuid: @wellness_stat.uuid }
    end

    assert_redirected_to wellness_stat_path(assigns(:wellness_stat))
  end

  test "should show wellness_stat" do
    get :show, id: @wellness_stat
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @wellness_stat
    assert_response :success
  end

  test "should update wellness_stat" do
    patch :update, id: @wellness_stat, wellness_stat: { json: @wellness_stat.json, string: @wellness_stat.string, uuid: @wellness_stat.uuid }
    assert_redirected_to wellness_stat_path(assigns(:wellness_stat))
  end

  test "should destroy wellness_stat" do
    assert_difference('WellnessStat.count', -1) do
      delete :destroy, id: @wellness_stat
    end

    assert_redirected_to wellness_stats_path
  end
end
