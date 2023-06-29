import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { AuthContext } from 'context/authProvider/AuthProvider';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Blogs', href: '/blogs' },
  // { name: 'Dashboard', href: '/dashboard' },
];

const navigationWithDashboard = [
  { name: 'Home', href: '/' },
  { name: 'Properties', href: '/properties' },
  { name: 'Blogs', href: '/blogs' },
  { name: 'Dashboard', href: '/dashboard' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  return (
    <header className="fixed z-10 w-full bg-white shadow-sm">
      <section className="container mx-auto px-2 md:px-4 xl:px-0">
        <nav className="flex items-center justify-between py-6" aria-label="Global">
          <div className="flex lg:flex-1 gap-2 items-center">
            <Link to="/" className="-m-1.5 p-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
              </svg>
            </Link>
            <h2 className="font-semibold">RealEstate Genius</h2>
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
            {
              user?.uid ?
                navigationWithDashboard.map((item) => (
                  <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                  </Link>
                ))
                :
                navigation.map((item) => (
                  <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6 text-gray-900">
                    {item.name}
                  </Link>
                ))                
            }
          </div>
          {
            user?.uid ?
              (
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <button onClick={logOut} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Logout <span aria-hidden="true">&rarr;</span>
                  </button>
                </div>
              )
              :
              (
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                  <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              )
          }
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white py-6 px-2 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Link to="/" className="-m-1.5 p-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
                  </svg>
                </Link>
                <h2 className="font-semibold">RealEstate Genius</h2>
              </div>
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
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {
                    user?.uid ?
                      navigationWithDashboard.map((item) => (
                        <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </Link>
                      ))
                      :
                      navigation.map((item) => (
                        <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          {item.name}
                        </Link>
                      ))
                  }
                </div>
                {
                  user?.uid ?
                    (
                      <div className="py-6">
                        <button onClick={logOut} type="button" className="text-sm font-semibold leading-6 text-gray-900">
                          Logout <span aria-hidden="true">&rarr;</span>
                        </button>
                      </div>
                    )
                    :
                    (
                      <div className="py-6">
                        <Link to="/login" className="text-sm font-semibold leading-6 text-gray-900">
                          Log in <span aria-hidden="true">&rarr;</span>
                        </Link>
                      </div>
                    )
                }
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </section>
    </header>
  );
}
