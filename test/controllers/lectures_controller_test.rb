require "test_helper"

class LecturesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @lecture = lectures(:one)
  end

  test "should get index" do
    get lectures_url
    assert_response :success
  end

  test "should get new" do
    get new_lecture_url
    assert_response :success
  end

  test "should create lecture" do
    assert_difference("Lecture.count") do
      post lectures_url, params: { lecture: { description: @lecture.description, image_url: @lecture.image_url, name: @lecture.name, price: @lecture.price, removed: @lecture.removed, teacher_id: @lecture.teacher_id, web_link: @lecture.web_link } }
    end

    assert_redirected_to lecture_url(Lecture.last)
  end

  test "should show lecture" do
    get lecture_url(@lecture)
    assert_response :success
  end

  test "should get edit" do
    get edit_lecture_url(@lecture)
    assert_response :success
  end

  test "should update lecture" do
    patch lecture_url(@lecture), params: { lecture: { description: @lecture.description, image_url: @lecture.image_url, name: @lecture.name, price: @lecture.price, removed: @lecture.removed, teacher_id: @lecture.teacher_id, web_link: @lecture.web_link } }
    assert_redirected_to lecture_url(@lecture)
  end

  test "should destroy lecture" do
    assert_difference("Lecture.count", -1) do
      delete lecture_url(@lecture)
    end

    assert_redirected_to lectures_url
  end
end
