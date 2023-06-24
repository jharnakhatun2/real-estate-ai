import { Popover, Transition } from "@headlessui/react";
import { Fragment, useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "context/authProvider/AuthProvider";
import { Link } from "react-router-dom";
import Button from "components/ui/Button";

const routes = [
  { label: `Home`, href: "/" },
  { label: `Properties`, href: "/properties" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  // logout menu item
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.log(err));
  };
  // menu fixed when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // menu style variable
  const menuStyle = [
    "mx-4 whitespace-nowrap text-[#373636] text-[17px] hover:text-[#7C6EE4]",
  ];
  // menu style variable
  const mobileMenuStyle = [
    "mb-4 uppercase text-[#555554] hover:text-[#7C6EE4]",
  ];

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white bg-opacity-30 animate-fade-down shadow-lg border-b border-gray-200 backdrop-filter backdrop-blur-lg sticky top-0 "
          : "bg-transparent absolute top-0 w-full"
      } px-0 md:px-5 py-2 lg:py-4 z-50`}
    >
      <div className={"container mx-auto"}>
        <div className={"hidden xl:block"}>
          <div className={"flex items-center justify-between"}>
            <div>
              <a href={"/"}>
                <img
                  className={"h-12"}
                  src={"/assets/images/logo.png"}
                  alt={"Predictiville Logo"}
                />
              </a>
            </div>

            <div
              className={
                "flex flex-1 justify-end items-center text-xl  text-darkestGray"
              }
            >
              <ul className={"flex"}>
                {routes.map((route) => (
                  <li key={route.label} className={menuStyle}>
                    <a href={route.href}>{route.label}</a>
                  </li>
                ))}
                {user?.uid ? (
                  <>
                    <li className={menuStyle}>
                      <button onClick={handleLogout}>Log Out</button>
                    </li>
                  </>
                ) : (
                  <>
                    <li className={menuStyle}>
                      <Link to="/signIn">Login</Link>
                    </li>
                    <li className={menuStyle}>
                      <Link to="/register">Registration</Link>
                    </li>
                  </>
                )}
              </ul>
              <div className="divider divider-horizontal"></div>
              <div>
                <a href={"/dashboard"}>
                  <Button>Create Listing</Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* mobile navbar*/}
        <div className={"xl:hidden"}>
          <div className={"flex items-center"}>
            <div>
              <a href={"/"}>
                <img
                  className={"h-16"}
                  src={"/assets/images/logo.png"}
                  alt={"Predictiville Logo"}
                />
              </a>
            </div>

            <div className={"mx-16 flex-1"}></div>
            <div>
              <Popover>
                <Popover.Button
                  className={"focus:outline-none"}
                  aria-label="menu"
                >
                  <GiHamburgerMenu className={"h-6 w-6 text-primary"} />
                </Popover.Button>

                <Popover.Overlay className="fixed inset-0 z-50" />

                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform -translate-x-full"
                  enterTo="transform translate-x-0"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform translate-x-0"
                  leaveTo="transform -translate-x-full"
                >
                  <Popover.Panel
                    className={
                      "fixed left-0 pl-6 top-0 z-50 h-screen w-[55%] bg-transparent"
                    }
                  >
                    {({ close }) => (
                      <div
                        className={
                          "bg-white bg-opacity-90 mt-[5rem] pt-5 pb-5 px-5"
                        }
                      >
                        <ul className={""}>
                          {routes.map((route) => (
                            <li
                              key={route.label}
                              onClick={() => close()}
                              className={mobileMenuStyle}
                            >
                              <a href={route.href}>{route.label}</a>
                            </li>
                          ))}
                          {user?.uid ? (
                            <>
                              <li className={mobileMenuStyle}>
                                <button onClick={handleLogout}>Log Out</button>
                              </li>
                            </>
                          ) : (
                            <>
                              <li className={mobileMenuStyle}>
                                <Link to="/signIn">Login</Link>
                              </li>
                              <li className={mobileMenuStyle}>
                                <Link to="/register">Registration</Link>
                              </li>
                            </>
                          )}
                        </ul>

                        <div>
                          <a href={"/dashboard"} onClick={() => close()}>
                            <Button> Create Listing</Button>
                          </a>
                        </div>
                      </div>
                    )}
                  </Popover.Panel>
                </Transition>
              </Popover>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
