import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditCourse() {
  const { id } = useParams();
  const navigate = useNavigate();

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

  useEffect(() => {
    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const res = await axios.get(
        `https://coursetracker-bd.onrender.com/api/courses/${id}`
      );

      setCourse({
        courseName: res.data.courseName || "",
        category: res.data.category || "",
        instructor: res.data.instructor || "",
        duration: res.data.duration || "",
        status: res.data.status || "",
        progress: res.data.progress || "",
        startDate: res.data.startDate
          ? res.data.startDate.substring(0, 10)
          : "",
        endDate: res.data.endDate
          ? res.data.endDate.substring(0, 10)
          : "",
        description: res.data.description || "",
      });
    } catch (error) {
      console.log(error);
      alert("Failed to load course");
    }
  };

  const handleChange = (e) => {
    setCourse({
      ...course,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `https://coursetracker-bd.onrender.com/api/courses/${id}`,
        course
      );

      alert("Course Updated Successfully!");
      navigate("/courses");
    } catch (error) {
      console.log(error);
      alert("Failed to update course");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h3>Edit Course</h3>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Course Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="courseName"
                  value={course.courseName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  name="category"
                  value={course.category}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Instructor</label>
                <input
                  type="text"
                  className="form-control"
                  name="instructor"
                  value={course.instructor}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Duration</label>
                <input
                  type="text"
                  className="form-control"
                  name="duration"
                  value={course.duration}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Status</label>
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
                <label className="form-label">Progress (%)</label>
                <input
                  type="number"
                  className="form-control"
                  name="progress"
                  value={course.progress}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={course.startDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={course.endDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Description</label>
                <textarea
                  className="form-control"
                  rows="4"
                  name="description"
                  value={course.description}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button type="submit" className="btn btn-primary w-100">
              Update Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditCourse;
