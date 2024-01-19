import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TournamentHeader() {
  const menuItems = [
    {
      name: "Home",
      to: "teams",
    },
    {
      name: "About",
      to: "",
    },
    {
      name: "Contact",
      to: "",
    },
  ];

  return (
    <div className="relative w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 px-8 border">
        <div className="block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className=" text-lg font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
