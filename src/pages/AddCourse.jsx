import { useState } from "react";
import axios from "axios";

function AddCourse() {
  const [course, setCourse] = useState({
    courseName: "",
    category: "",
    instructor: "",
    duration: "",
    status: "",
    progress: "",
    startDate: "",
    endDate: "",
    description: "",
  });

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3001/api/courses/add",
        course
      );

      console.log(res.data);

      alert("Course Added Successfully!");

      setCourse({
        courseName: "",
        category: "",
        instructor: "",
        duration: "",
        status: "",
        progress: "",
        startDate: "",
        endDate: "",
        description: "",
      });
    } catch (error) {
      console.log(error);

      if (error.response) {
        console.log(error.response.data);
        alert(
          error.response.data.error || error.response.data.message
        );
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-success text-white">
          <h3>Add New Course</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="courseName"
                  value={course.courseName}
                  onChange={handleChange}
                  placeholder="Enter Course Name"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                  placeholder="Enter Category"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Instructor</label>
                <input
                  type="text"
                  className="form-control"
                  name="instructor"
                  value={course.instructor}
                  onChange={handleChange}
                  placeholder="Instructor Name"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Duration</label>
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  value={course.duration}
                  onChange={handleChange}
                  placeholder="8 Weeks"
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Status</label>
                <select
                  className="form-select"
                  name="status"
                  value={course.status}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Status</option>
                  <option value="Not Started">Not Started</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label>Progress (%)</label>
                <input
                  type="number"
                  className="form-control"
                  name="progress"
                  value={course.progress}
                  onChange={handleChange}
                  placeholder="0-100"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={course.startDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>End Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={course.endDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label>Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                  placeholder="Course Description"
                ></textarea>
              </div>

            </div>

            <button type="submit" className="btn btn-success w-100">
              Save Course
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCourse;