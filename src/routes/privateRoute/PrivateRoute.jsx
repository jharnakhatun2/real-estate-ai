import { AuthContext } from "context/authProvider/AuthProvider"
import { useContext } from "react"
import { Navigate } from "react-router-dom";

export default function PrivateRoute({children}) {
  const {user} = useContext(AuthContext);
  if(!user){
return <Navigate to="/signIn"></Navigate>
  }
  return children;
}