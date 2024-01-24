import React from 'react'

function MatchCard({
  id,
  team1,
  team2,
  stime,
}) {
  return (
    <div className="w-[300px] rounded-md border bg-slate-300 m-1">
      {/* <img
        src={`/banner.png`}
        alt="Laptop"
        className="h-[200px] w-full rounded-t-md object-cover"
      /> */}
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold">
          {team1.name}
        </h1>
        <p className="m-1 text-sm text-gray-600">vs</p>
        <h1 className="inline-flex items-center text-lg font-semibold">
          {team2.name}
        </h1>
        <p className="mt-1 text-sm text-gray-600">
          {`Start Date :- ${new Date(stime).totimeString()}`}
        </p>
        <Link to={`/tournament/${id}`}>
          <button
            type="button"
            className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Read
          </button>
        </Link>
      </div>
    </div>
  )
}

export default MatchCard