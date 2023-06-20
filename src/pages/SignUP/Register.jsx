import { FcGoogle } from "react-icons/fc";
import { FiFacebook } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Register = () => {
  const inputStyle = `peer m-0 block h-[48px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-[#007bff] transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-black focus:outline-none peer-focus:text-primary dark:border-neutral-600 dark:text-neutral-200 dark:focus:border-primary dark:peer-focus:text-primary [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]`;
  const labelStyle = `pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-3 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary`;

  return (
    <div className="registration-form">
      <div className="form-main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="signup">
          <form>
            <label className="form-label" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <div className="w-[80%] mx-auto">
              {/* <!--Social media Sign In--> */}
              <div className="social-container text-center">
                <a href="#" className="social">
                  <FcGoogle />
                </a>
                <a href="#" className="social">
                  <FiFacebook />
                </a>
                <a href="#" className="social">
                  <FaGithub />
                </a>
              </div>
              {/* <!--User Name input--> */}
              <div className="relative mb-3">
                <input
                  type="userName"
                  className={inputStyle}
                  id="floatingName"
                  placeholder="User Name"
                />
                <label htmlFor="floatingName" className={labelStyle}>
                  User name
                </label>
              </div>
              {/* <!--Email input--> */}
              <div className="relative mb-3">
                <input
                  type="email"
                  className={inputStyle}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput" className={labelStyle}>
                  Email
                </label>
              </div>

              {/* <!--Password input--> */}
              <div className="relative mb-3">
                <input
                  type="password"
                  className={inputStyle}
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword" className={labelStyle}>
                  Password
                </label>
              </div>
              {/* <!--Submit input--> */}
              <button className="form-btn">Sign up</button>
            </div>
          </form>
        </div>

        <div className="login">
          <form>
            <label className="form-label" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <div className="w-[80%] mx-auto">
              {/* <!--Social media Login--> */}
              <div className="social-container text-center social-icon">
                <a href="#" className="social-icon">
                  <FcGoogle />
                </a>
                <a href="#" className="social-icon">
                  <FiFacebook />
                </a>
                <a href="#" className="social-icon">
                  <FaGithub />
                </a>
              </div>
              {/* <!--Email input--> */}
              <div className="relative mb-3">
                <input
                  type="email"
                  className={inputStyle}
                  id="floatingInput"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingInput" className={labelStyle}>
                  Email
                </label>
              </div>

              {/* <!--Password input--> */}
              <div className="relative mb-3">
                <input
                  type="password"
                  className={inputStyle}
                  id="floatingPassword"
                  placeholder="Password"
                />
                <label htmlFor="floatingPassword" className={labelStyle}>
                  Password
                </label>
              </div>
              {/* <!--Submit input--> */}
              <button className="form-btn">Log In</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
