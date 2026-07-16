import "./DashboardCard.css";

function DashboardCard({ title, value, icon, bgColor }) {
  return (
    <div className="dashboard-card" style={{ backgroundColor: bgColor }}>
      <div className="card-icon">
        {icon}
      </div>

      <div className="card-content">
        <h5>{title}</h5>
        <h2>{value}</h2>
      </div>
    </div>
  );
}

export default DashboardCard;