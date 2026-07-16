import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";

import {
  FaBook,
  FaCheckCircle,
  FaClock,
  FaTasks,
} from "react-icons/fa";

function Dashboard() {
  return (
    <Layout>

      <h2 className="mb-4">Dashboard</h2>

      <div
        className="row"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "20px",
        }}
      >

        <DashboardCard
          title="Total Courses"
          value="4586"
          icon={<FaBook />}
          bgColor="#2563EB"
        />

        <DashboardCard
          title="Active Courses"
          value="587"
          icon={<FaCheckCircle />}
          bgColor="#C026D3"
        />

        <DashboardCard
          title="Launched Courses"
          value="57"
          icon={<FaClock />}
          bgColor="#FACC15"
        />

        <DashboardCard
          title="Due Courses"
          value="57"
          icon={<FaTasks />}
          bgColor="#EF4444"
        />

      </div>

    </Layout>
  );
}

export default Dashboard;