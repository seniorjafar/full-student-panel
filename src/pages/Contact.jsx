import { useNavigate } from "react-router-dom";
import { useAuth } from "../components/Auth";

const Profile = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="container">
      <div className="p-5 w-50 mx-auto">
        <h1 className="pb-3 text-center">MY LOGIN</h1>
        <table className="table">
          <tbody>
            <tr>
              <td>Username:</td>
              <td>{user && user.username}</td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>{user && user.password}</td>
            </tr>
            <tr>
              <td>age:</td>
              <td>{user && user.age}</td>
            </tr>
            <tr>
              <td>Group:</td>
              <td>{user && user.group}</td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-outline-dark" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
