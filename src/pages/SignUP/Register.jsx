import { AuthContext } from "context/authProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import useTitle from "hook/useTitle";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const [signupError, setSignUpError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  useTitle("Register");
  const handleRegister = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userName = {
          displayName: data.username,
        };
        updateUser(userName)
          .then(() => {})
          .catch((err) => console.log(err));
        toast("Your registration is Successful (•‿•)", {
          style: {
            border: "1px solid #fff",
            backgroundColor: "#4cd137",
            color: "#000",
          },
        });
        navigate("/dashboard");
        reset();
      })
      .catch((err) => {
        console.log(err);
        setSignUpError(err.message);
      });
  };

  // Privacy agree checkbox
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  // Signup with Google
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Your registration is Successful (•‿•)", {
          style: {
            border: "1px solid #fff",
            backgroundColor: "#4cd137",
            color: "#000",
          },
        });
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  // Signup with Github
  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("Your registration is Successful (•‿•)", {
          style: {
            border: "1px solid #fff",
            backgroundColor: "#4cd137",
            color: "#000",
          },
        });
        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-[url('/assets/images/logBg.jpg')] bg-fixed bg-no-repeat bg-cover  bg-center pt-32 pb-20 overflow-hidden">
        {" "}
        <div className="mx-5 md:mx-20 lg:mx-0">
          <div className="lg:w-1/2 mx-auto shadow-lg">
            {" "}
            <div className="bg-white rounded-t-lg p-8">
              {" "}
              <p className="text-center text-sm text-gray-400 font-light">
                Sign up with
              </p>{" "}
              <div>
                {" "}
                {/* Registration with Social media */}
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
                  {/* SignIn with Google */}
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
              <p className="text-center text-sm text-gray-500 font-light">
                {" "}
                Or sign up with credentials{" "}
              </p>{" "}
              {/* Registration Form */}
              <form onSubmit={handleSubmit(handleRegister)} className="mt-6">
                {" "}
                {/* User Name Input field */}
                <div className="relative">
                  {" "}
                  <input
                    {...register("username", {
                      required: "Name is required !",
                    })}
                    className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none focus:ring-gray-600 focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="User Name"
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
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>{" "}
                  </div>{" "}
                </div>
                {errors.username && (
                  <p className="text-danger" role="alert">
                    {errors.username?.message}
                  </p>
                )}{" "}
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
                      minLength: {
                        value: 8,
                        message: "Password must be 8 characters or longer",
                      },
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[@#$&*])(?=.*[0-9])/,
                        message:
                          "Password must have uppercase, number and special characters",
                      },
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
                {signupError && (
                  <p className="text-danger" role="alert">
                    {signupError}
                  </p>
                )}{" "}
                <p className="mt-4 italic text-gray-500 font-light text-xs">
                  Already have an account?{" "}
                  <span className="font-bold text-indigo-400 border p-1 border-gray-300 rounded text-md">
                    <Link to="/login">Login</Link>
                  </span>
                </p>{" "}
                {/* Checkbox for agree policy */}
                <div className="mt-4 flex items-center text-gray-500">
                  {" "}
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="mr-2"
                    onChange={handleCheckboxChange}
                  />{" "}
                  <label className="text-sm" htmlFor="remember">
                    I agree with the{" "}
                    <a href="/privacy" className="text-indigo-300 hover:text-indigo-400">
                      Privacy Policy
                    </a>
                  </label>
                </div>{" "}
                <div className="flex items-center justify-center mt-8">
                  {" "}
                  {/* Form Submit  */}
                  <button
                    type="submit"
                    className={`text-white py-2 px-4 uppercase rounded bg-[#9f95e9] hover:bg-[#7C6EE4] shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5 ${
                      isChecked ? "" : "opacity-50 cursor-not-allowed"
                    }`}
                    disabled={!isChecked}
                  >
                    {" "}
                    Create Account{" "}
                  </button>{" "}
                </div>{" "}
              </form>{" "}
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;