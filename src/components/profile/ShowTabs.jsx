import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import UserTournaments from './UserTournaments';
import UserMatches from './UserMatches';



function ShowTabs() {

    const user = useSelector((state) => state.auth.userData);
    const [tournament, setTournament] = useState(null);

  return (
    <div role="tablist" className="tabs tabs-lifted tabs-lg">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Tournaments"
            checked
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box h-full"
          >
            <UserTournaments/>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Matches"
            
          />
          <div
            role="tabpanel"
            className="tab-content h-full lg:min-h-[70vh] bg-base-100 border-base-300 rounded-box"
          >
            <UserMatches/>
          </div>
        </div>
  )
}

export default ShowTabs