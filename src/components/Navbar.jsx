import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Button from './ui/Button';

const routes = [
  { label: `home`, href: '/' },
  { label: `properties`, href: '/' },
  { label: `login/registration`, href: '/' },
];

export default function Navbar() {
  return (
    <nav
      className={
        'mx-auto max-w-[1600px] bg-white px-8 py-8  animate-fade-down shadow-lg lg:px-32 lg:py-4'
      }
    >
      <div className={'hidden xl:block'}>
        <div className={'flex items-center justify-between'}>
          <div>
            <a href={'/'}>
              <img
                className={'h-12'}
                src={'/assets/images/logo.png'}
                alt={'Predictiville Logo'}
              />
            </a>
          </div>

          <div
            className={
              'mx-8 flex flex-1 justify-center text-lg font-bold uppercase text-darkestGray'
            }
          >
            <ul className={'flex'}>
              {routes.map((route) => (
                <li
                  key={route.label}
                  className={
                    'mx-4 whitespace-nowrap text-secondary text-[15px] hover:text-primary'
                  }
                >
                  <a href={route.href}>{route.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a href={'/pricing'}>
              <Button>Create a Property</Button>
            </a>
          </div>
        </div>
      </div>
      <div className={'xl:hidden'}>
        {/* mobile */}
        <div className={'flex items-center'}>
          <div>
            <a href={'/'}>
              <img
                className={'h-16'}
                src={'/assets/images/logo.png'}
                alt={'Predictiville Logo'}
              />
            </a>
          </div>

          <div className={'mx-16 flex-1'}></div>
          <div>
            <Popover>
              <Popover.Button
                className={'focus:outline-none'}
                aria-label='menu'
              >
                <GiHamburgerMenu className={'h-6 w-6 text-primary'} />
              </Popover.Button>

              <Popover.Overlay className='fixed inset-0 z-20 bg-black opacity-30' />

              <Transition
                as={Fragment}
                enter='transition duration-100 ease-out'
                enterFrom='transform -translate-x-full'
                enterTo='transform translate-x-0'
                leave='transition duration-75 ease-out'
                leaveFrom='transform translate-x-0'
                leaveTo='transform -translate-x-full'
              >
                <Popover.Panel
                  className={
                    'fixed left-0 top-0 z-20 h-screen w-80 bg-white p-6'
                  }
                >
                  {({ close }) => (
                    <div>
                      <a href={'/'} onClick={() => close()}>
                        <img
                          className={'mb-8 h-10'}
                          src={'/assets/images/logo.png'}
                          alt={'Predictiville Logo'}
                        />
                      </a>

                      <ul className={'mb-8'}>
                        {routes.map((route) => (
                          <li
                            key={route.label}
                            onClick={() => close()}
                            className={
                              'mb-4 font-medium uppercase text-[#555554] hover:text-primary'
                            }
                          >
                            <a href={route.href}>{route.label}</a>
                          </li>
                        ))}
                      </ul>

                      <div>
                        <a href={'/pricing'} onClick={() => close()}>
                          <div
                            className={
                              'rounded-full bg-primary py-3 px-8 text-center text-white'
                            }
                          >
                            Create your Property
                          </div>
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
    </nav>
  );
}
