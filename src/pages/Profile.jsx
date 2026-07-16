import { useState } from "react";
import toast from "react-hot-toast";

function Profile() {
  const [profile, setProfile] = useState({
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    qualification: "",
    address: "",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(profile);

    toast.success("Profile Updated Successfully");
  };

  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-header bg-primary text-white">
          <h3>My Profile</h3>
        </div>

        <div className="card-body">

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  value={profile.fullName}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={profile.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  value={profile.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Gender</label>

                <select
                  className="form-select"
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>

              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label">Qualification</label>
                <input
                  type="text"
                  className="form-control"
                  name="qualification"
                  value={profile.qualification}
                  onChange={handleChange}
                  placeholder="Enter Qualification"
                />
              </div>

              <div className="col-12 mb-3">
                <label className="form-label">Address</label>

                <textarea
                  className="form-control"
                  rows="4"
                  name="address"
                  value={profile.address}
                  onChange={handleChange}
                  placeholder="Enter Address"
                ></textarea>
              </div>

            </div>

            <button
              type="submit"
              className="btn btn-primary w-100"
            >
              Update Profile
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Profile;