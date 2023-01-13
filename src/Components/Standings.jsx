import { useState } from 'react';

import { StandingsData } from "../Models/StandingsData"
import RemoveDuplicates from './RemoveDuplicates';
import StandingsButton from "./StandingsButtons"
import StandingsDivisional from './StandingsDivisional';
import StandingsWildCard from './StandingsWildCards';
import StandingsPlayoffs from './StandingsPlayoffs';

const Standings = () => {
  const { records } = StandingsData

  const [radioNme, setRadioNme] = useState('Divisional');

  let conferences = []
  records.forEach(record => {
    const { name } = record.conference
    conferences.push(name)
  })
  RemoveDuplicates(conferences.sort())

  console.log(conferences)

  const standings = conferences.map((conference, i) => {
    switch (radioNme) {
      case 'Divisional':
        return (
          <div key={`${conference}-Conference`}>
            <h3>{conference}</h3>
              <StandingsDivisional records={records} conference={conference}/>
          </div>
        ) 
      case 'Wild Card':
        return (
          <div key={`${conference}-Conference`}>
            <h3>{conference}</h3>
            <p>{radioNme}</p>
            <StandingsWildCard />
          </div>
        ) 
      case 'Playoffs':
        return (
          <div key={`${conference}-Conference`}>
            <h3>{conference}</h3>
            <p>{radioNme}</p>
            <StandingsPlayoffs />
          </div>
        ) 
    }
  })


  return (
    <div>
      <h4>{`${radioNme} Standings`}</h4>
      <div>
      <StandingsButton radioNme={radioNme} setRadioNme={setRadioNme}/> 
      </div>
      
      {standings}
    </div>

  )
}

export default Standings