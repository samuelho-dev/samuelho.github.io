import React from 'react';
import data from '../../util/resume.json';

function WorkHistory() {
  const experience = data.workExperience;
  console.log(Object.keys(experience), experience);
  return (
    <div>
      {Object.keys(experience).map((item, i) => (
        <div key={i}>
          {experience[item].responsibilities.map((el, j) => (
            <p key={j}>{el}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WorkHistory;
