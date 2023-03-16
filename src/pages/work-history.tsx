import React from 'react';
import data from '../../util/resume.json';

function WorkHistory() {
  const experience = data.workExperience;
  console.log(experience);
  return (
    <div>
      {experience.map((entry, i) => (
        <div key={i}>
          <p>{entry.employer}</p>
          <p>{entry.title}</p>
          <p>{entry.dates}</p>
          <p>{entry.location}</p>
          {entry.responsibilities.map((el, j) => (
            <p key={j}> {el}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WorkHistory;
