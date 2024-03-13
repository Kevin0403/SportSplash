import { ArrowUpRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { BackgroundGradient } from "../style";

function Card({ id, tournamentName, user, startDate, endDate, game }) {
  return (
      <BackgroundGradient>
    <div className=" rounded-2xl border shadow-lg bg-card hover:bg-card-hover hover:text-card-hover hover:border-b-card-hover border-b-card border-b-8">
<Link to={`/tournament/${id}`}>
      {/* <h1 className="text-center w-full rounded-t-lg text-lg font-semibold text-common bg-card-header">
          {game} 
      </h1> */}
      <img 
        src={`/banner.jpg`}
        alt="Laptop"
        className="h-[150px] rounded-lgobject-cover"
      />
      <div className="px-4 pb-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {tournamentName} &nbsp; <ArrowUpRight className="h-4 w-4" />
        </h1>
        <p className="mt-3 text-sm text-gray-600">{`University : ${user.university}`}</p>
        <p className="mt-1 text-sm text-gray-600">
          {`Start Date :- ${new Date(startDate).toDateString()}`}
        </p>
        <p className="mt-1 text-sm text-gray-600">
          {`Created By ${user.fname} ${user.lname}`}
        </p>
          {/* <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button> */}
      </div>
        </Link>
    </div>
    </BackgroundGradient>
  );
}

export default Card;
