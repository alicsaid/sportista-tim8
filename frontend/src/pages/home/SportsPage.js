import React from 'react';
import { useParams } from 'react-router-dom';
import Basketball from '../../components/sports/Basketball';
import Paintball from '../../components/sports/Paintball';
import Tennis from '../../components/sports/Tennis';
import IceSkating from '../../components/sports/IceSkating';
import Football from '../../components/sports/Football';
import Volleyball from '../../components/sports/Volleyball';
import Boxing from '../../components/sports/Boxing';
import Handball from '../../components/sports/Handball';
import TableTennis from '../../components/sports/TableTennis';
import Hockey from '../../components/sports/Hockey';

function SportsPage() {

    const { sport } = useParams();

    return (
        <div>
            <h1>Sports</h1>
            {sport === 'basketball' && <Basketball/>}
            {sport === 'paintball' && <Paintball/>}
            {sport === 'tennis' && <Tennis/>}
            {sport === 'ice_skating' && <IceSkating/>}
            {sport === 'football' && <Football/>}
            {sport === 'volleyball' && <Volleyball/>}
            {sport === 'boxing' && <Boxing/>}
            {sport === 'handball' && <Handball/>}
            {sport === 'table_tennis' && <TableTennis/>}
            {sport === 'hockey' && <Hockey/>}
        </div>
    );
}

export default SportsPage;
