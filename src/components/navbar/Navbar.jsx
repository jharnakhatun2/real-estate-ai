import { AuthContext } from "context/authProvider/AuthProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const {user,logOut} = useContext(AuthContext);

  const handleLogout =()=>{
    logOut()
    .then(()=>{})
    .catch(err=>console.log(err));
  }

  return (
    <>
      {
              user?.uid ? 
              <>
              <li><Link to="/dashboard" >Dashboard</Link></li>
              <li><button onClick={handleLogout}>Log Out</button></li>
              </>
               :
               <>
              <li><Link to="/signIn">Login</Link></li>
              <li><Link to="/register">Registration</Link></li>
              </>
            }
    </>
  );
}