import { AuthContext } from "context/authProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useTitle from "hook/useTitle";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { signIn, providerLogin } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const [logInError, setLogInError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  useTitle("LogIn");
  const handleLogin = (data) => {
    setLogInError("");
    setPasswordError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Log In Successful 👍", {
          style: {
            border: "1px solid #ffffff",
            backgroundColor: "#9f95e9",
          },
        });
        navigate(from, { replace: true });
        reset();
      })
      .catch((err) => {
        console.log(err.message);
        setPasswordError(err.message);
        setLogInError(err.message);
      });
  };

  // register with Google
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Log In Successful 👍", {
          style: {
            border: "1px solid #ffffff",
            backgroundColor: "#9f95e9",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  // register with Github
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Log In Successful 👍", {
          style: {
            border: "1px solid #ffffff",
            backgroundColor: "#9f95e9",
          },
        });
        navigate(from, { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-[url('/assets/images/logBg.jpg')] bg-fixed bg-no-repeat bg-cover  bg-center pt-32 pb-20 overflow-hidden">
      {" "}
      <div className="mx-5 md:mx-20 lg:mx-0">
        <div className="lg:w-1/2 mx-auto shadow-lg">
          {" "}
          <div className="bg-white rounded-t-lg p-8">
            {" "}
            <p className="text-center text-gray-400 font-light">
              Sign in with
            </p>{" "}
            <div>
              {" "}
              <div className="flex items-center justify-center space-x-4 mt-3">
                {" "}
                <button
                  onClick={handleGithubSignIn}
                  className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#7C6EE4] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    className="w-6 h-6 mr-3"
                  >
                    {" "}
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    />{" "}
                  </svg>{" "}
                  Github{" "}
                </button>{" "}
                <button
                  onClick={handleGoogleSignIn}
                  className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-[#7C6EE4] border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-3"
                    viewBox="0 0 48 48"
                  >
                    {" "}
                    <path
                      fill="#fbc02d"
                      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                    />{" "}
                    <path
                      fill="#e53935"
                      d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
                    />{" "}
                    <path
                      fill="#4caf50"
                      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
                    />{" "}
                    <path
                      fill="#1565c0"
                      d="M43.611 20.083 43.595 20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
                    />{" "}
                  </svg>{" "}
                  Google{" "}
                </button>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">
            {" "}
            <p className="text-center text-gray-500 font-light">
              {" "}
              Or sign in with credentials{" "}
            </p>{" "}
            {/* Login Form */}
            <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
              {" "}
              {/* Email Input Field */}
              <div className="relative mt-3">
                {" "}
                <input
                  {...register("email", { required: "Email is required !" })}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                />{" "}
                <div className="absolute left-0 inset-y-0 flex items-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {" "}
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />{" "}
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />{" "}
                  </svg>{" "}
                </div>{" "}
              </div>
              {errors.email && (
                <p className="text-danger" role="alert">
                  {errors.email?.message}
                </p>
              )}{" "}
              {/* Password Input Field */}
              <div className="relative mt-3">
                {" "}
                <input
                  {...register("password", {
                    required: "Password is required !",
                  })}
                  className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="Password"
                />{" "}
                <div className="absolute left-0 inset-y-0 flex items-center">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 ml-3 text-gray-400 p-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    {" "}
                    <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2H7V7a3 3 0 015.905-.75 1 1 0 001.937-.5A5.002 5.002 0 0010 2z" />{" "}
                  </svg>{" "}
                </div>{" "}
              </div>
              {errors.password && (
                <p className="text-danger" role="alert">
                  {errors.password?.message}
                </p>
              )}
              {passwordError && (
                <p className="text-danger" role="alert">
                  {passwordError}
                </p>
              )}{" "}
              {logInError && (
                <p className="text-danger" role="alert">
                  {logInError}
                </p>
              )}{" "}
              <p className="mt-4 italic text-gray-500 font-light text-xs">
                Already have an account?{" "}
                <span className="font-bold text-indigo-400 border p-1 border-gray-300 rounded text-md">
                  <Link to="/register">Register</Link>
                </span>
              </p>{" "}
              {/* Form Submit  */}
              <div className="flex items-center justify-center mt-8">
                {" "}
                <button
                  type="submit"
                  className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
                >
                  {" "}
                  Log in{" "}
                </button>{" "}
              </div>{" "}
            </form>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}