import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function TournamentHeader() {
  const menuItems = [
    {
      name: "Teams",
      to: "teams",
    },
    {
      name: "Matches",
      to: "matches",
    },
    {
      name: "Create-Match",
      to: "create-match",
    },
  ];

  return (
    <div className="relative border">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 px-8 ">
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
