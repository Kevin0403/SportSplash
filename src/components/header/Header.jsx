import React from "react";
import { Menu, X } from "lucide-react";
import Button from "../Button";
import Input from "../Input";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authslice";

function Header() {
  const menuItems = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  const authStatus = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const remove =() => {
    dispatch(logout())
  }

  return (
    <div className="bg-navbar z-20 fixed w-full">
      <div className="mx-auto flex items-center justify-between px-4  sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <img className=" h-10 p-1" src="/SportSplash.png" alt="logo" />
          </span>
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className=" text-lg font-semibold text-nav hover:text-nav-hover"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex grow justify-end items-center">
          {/* <Input placeholder="Search" type="text" /> */}
        </div>
        <div className="hidden mx-2 lg:block">
          <Link to="/create">
            <Button className="mx-2">Create</Button>
          </Link>
        </div>
        <div className="hidden mx-2 lg:block">
          {authStatus && (
            <Button onClick={remove} className="mx-2">
              Logout
            </Button>
          )}
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <img
                        className=" h-10 p-1"
                        src="/SportSplash.png"
                        alt="logo"
                      />
                    </span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <NavLink
                        key={item.name}
                        to={item.to}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
                <Link to="/create-tournament">
                  <Button onClick={toggleMenu}>Create</Button>
                </Link>
                {authStatus && (
                  <Button onClick={remove}>Logout</Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
