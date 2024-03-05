import React from 'react';
import { BadmintonMatch, Kabaddi } from '../components';

const MatchRoutes = {
    BADMINTON  : (<BadmintonMatch />),
    FOOTBALL   : (<div>Football</div>),
    KABADDI   : (<Kabaddi />),
}

export default MatchRoutes;