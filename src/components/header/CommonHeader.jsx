import React from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function CommonHeader({menuItems, className = ""}) {
  

  return (
    <div className={`relative border backdrop-blur-sm ${className}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 px-8 ">
        <div className="block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.to}
                  className={  ({isActive}) => ` text-lg ${isActive? 'font-semibold' : ''}  text-gray-800 hover:font-bold `}
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
