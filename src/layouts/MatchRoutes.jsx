import React from 'react';
import { BadmintonMatch, Kabaddi } from '../components';

const MatchRoutes = {
    BADMINTON  : (<BadmintonMatch />),
    VOLLEYBALL : (<BadmintonMatch />),
    TABLETENNIS: (<BadmintonMatch />),
    KABADDI   : (<Kabaddi />),
}

export default MatchRoutes;