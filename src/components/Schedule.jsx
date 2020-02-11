import React from 'react';

function Schedule(props){

  return(
    <div>
      <h5>{props.location}</h5>
      <p>{props.day}</p>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr className='HorizontalLine'/>
    </div>


  );
}

export default Schedule;
