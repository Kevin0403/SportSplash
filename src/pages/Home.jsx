import React, { useEffect, useState } from "react";
import { Card } from "../components";
import authService from "../connection/auth";
import { toast } from "sonner"
import Loading from "../components/Loading";
import {ImageSlider} from "../components";
import { HomeSliderImages } from "../components";

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

    <div className="mt-4">
      <div className="flex justify-center">
      <div className='container'>
        <ImageSlider images={HomeSliderImages} />
      </div>
      </div>
      <ul className="flex flex-wrap gap-2 justify-center">
        {data.map((tournament) => {
          return (
            <li key={tournament.id} className="m-3">
              <Card {...tournament} />
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <Loading />
  );
}

export default Home;
