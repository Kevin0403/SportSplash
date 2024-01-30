import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

function Card({ id, tournamentName, user, startDate, endDate, game }) {
  return (
<Link to={`/tournament/${id}`}>
    <div className="w-[230px] rounded-2xl border shadow-lg bg-card m-1 hover:bg-card-hover">
      <h1 className="text-center w-full rounded-t-lg text-lg font-semibold bg-navbar">
          {game} 
        </h1>
      <img
        src={`/banner.jpg`}
        alt="Laptop"
        className="h-[150px] w-full  object-cover"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {tournamentName} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">{`University : ${user.university}`}</p>
        <p className="mt-1 text-sm text-gray-600">
          {`Start Date :- ${new Date(startDate).toDateString()}`}
        </p>
          {/* <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button> */}
      </div>
    </div>
        </Link>
  );
}

export default Card;
