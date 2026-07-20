import { ProgressBar } from "react-bootstrap";
function Progress() {
  return (
    <div className="container mt-5">

      <h2 className="mb-4 text-center">Course Progress</h2>

      <div className="card shadow p-4">

        <div className="mb-4">
          <h5>Overall Progress</h5>
          <ProgressBar now={0} label="0%" />
        </div>

        <div className="mb-4">
          <h5>Completed Courses</h5>
          <ProgressBar variant="success" now={0} label="0%" />
        </div>

        <div className="mb-4">
          <h5>In Progress Courses</h5>
          <ProgressBar variant="warning" now={0} label="0%" />
        </div>

        <div className="mb-4">
          <h5>Pending Courses</h5>
          <ProgressBar variant="danger" now={0} label="0%" />
        </div>

      </div>

    </div>
  );
}

export default Progress;
