import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { AuthContext } from "context/authProvider/AuthProvider";
import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQ", href: "/faq" },
];

const navigationWithDashboard = [
  { name: "Home", href: "/" },
  { name: "Properties", href: "/properties" },
  { name: "Blogs", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? "text-primary font-bold" : "";
  };

  return (
    <header className="fixed w-full bg-white shadow-lg z-50 ">
      <section className="container mx-auto px-2 md:px-0">
        <nav className="flex items-center justify-around py-4" aria-label="Global">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <img src="https://i.ibb.co/yRF3f1P/logo2.png" alt="" className="w-[80%]" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {user?.uid
              ? navigationWithDashboard.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm uppercase  leading-6 text-gray-900 ${isActive(
                      item.href
                    )}`}
                  >
                    {item.name}
                  </Link>
                ))
              : navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm uppercase  leading-6 text-gray-900 ${isActive(
                      item.href
                    )}`}
                  >
                    {item.name}
                  </Link>
                ))}
          </div>
          {user?.uid ? (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button
                onClick={logOut}
                type="button"
                className="text-sm uppercase leading-6 text-gray-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <Link
                to="/login"
className={`text-sm uppercase leading-6 text-gray-900 ${isActive("/login")}`}
              >
                Log in
              </Link>
            </div>
          )}
          <span className="mx-5 hidden lg:block">|</span>
          <Link to="/dashboard">
            <button className="bg-[#7C6EE4] text-white text-sm p-[10px] rounded-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-[#7C6EE4] transition hidden lg:block">
              Create Property
            </button>
          </Link>
        </nav>
        {/* For Mobile Device */}
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-1/2 overflow-y-auto bg-white py-6 px-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <img
                  src="https://i.ibb.co/yRF3f1P/logo2.png"
                  alt=""
                  className="w-[70%]"
                />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="">
                <div className="space-y-1 py-4">
                  {user?.uid
                    ? navigationWithDashboard.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`-mx-3 block rounded-lg px-3 text-sm uppercase leading-7 text-gray-900 ${isActive(
                            item.href
                          )}`}
                        >
                          <span className="pl-2">{item.name}</span>
                        </Link>
                      ))
                    : navigation.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className={`-mx-3 block rounded-lg px-3 py-1 uppercase leading-7 text-gray-900 hover:bg-gray-50 text-sm hover:shadow border-b ${isActive(
                            item.href
                          )}`}
                        >
                          <span className="pl-2">{item.name}</span>
                        </Link>
                      ))}
                </div>
                {user?.uid ? (
                  <div className="py-6">
                    <button
                      onClick={logOut}
                      type="button"
                      className="text-sm uppercase leading-6 text-gray-900"
                    >
                      <span className="pl-2">Logout </span>
                    </button>
                  </div>
                ) : (
                  <div className="pb-3">
                    <Link
                      to="/login"
                      className={`text-sm uppercase leading-6 text-gray-900 ${isActive(
                        "/login"
                      )}`}
                    >
                      <span className="pl-2">Log in </span>
                    </Link>
                  </div>
                )}
                <Link to="/dashboard">
                  <button className="bg-primary text-white text-sm py-[5px] px-[7px] rounded-sm hover:bg-gradient-to-r hover:from-blue-500 hover:to-[#7C6EE4] transition block lg:hidden">
                    Create Property
                  </button>
                </Link>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </section>
    </header>
  );
}