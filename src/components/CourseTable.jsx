import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CourseTable.css";

function CourseTable({ courses = [], fetchCourses }) {
  const navigate = useNavigate();

  const deleteCourse = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this course?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://coursetracker-bd.onrender.com/api/courses/${id}`
      );

      alert("Course Deleted Successfully");

      // Reload the course list
      fetchCourses();

    } catch (error) {
      console.error("Delete Error:", error);
      alert(error.response?.data?.message || "Failed to delete course");
    }
  };

  return (
    <div className="table-container">
      <table className="course-table">
        <thead>
          <tr>
            <th>Course Name</th>
            <th>Category</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.length === 0 ? (
            <tr>
              <td colSpan="7" className="no-data">
                No Courses Available
              </td>
            </tr>
          ) : (
            courses.map((course) => (
              <tr key={course._id}>
                <td>{course.courseName}</td>
                <td>{course.category}</td>
                <td>{course.instructor}</td>
                <td>{course.duration}</td>
                <td>{course.status}</td>
                <td>{course.progress}%</td>

                <td>
                  <button
                    type="button"
                    className="edit-btn"
                    onClick={() => navigate(`/edit-course/${course._id}`)}
                  >
                    <FaEdit />
                  </button>

                  <button
                    type="button"
                    className="delete-btn"
                    onClick={() => deleteCourse(course._id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CourseTable;
