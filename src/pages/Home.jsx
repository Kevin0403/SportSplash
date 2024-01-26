import React, { useEffect, useState } from "react";
import { Card } from "../components";
import authService from "../connection/auth";
import { toast } from "react-toastify";

function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      //TODO : fetch data from database
      try {
        const data = await authService.getTournaments();
        setData(data);
      } catch (err) {
        toast.error(err.message);
      }
    }
    fetchData();
  }, []);

  return data ? (
    <div>
      <ul className="flex flex-wrap justify-center">
        {data.map((tournament) => {
          return (
            <li key={tournament.id}>
              <Card {...tournament} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <h1 className="w-full h-full text-center">Loading</h1>
  );
}

export default Home;
