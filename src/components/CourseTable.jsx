import { FaEdit, FaTrash } from "react-icons/fa";
import "./CourseTable.css";

function CourseTable({ courses = [] }) {
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
                  <button className="edit-btn">
                    <FaEdit />
                  </button>

                  <button className="delete-btn">
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