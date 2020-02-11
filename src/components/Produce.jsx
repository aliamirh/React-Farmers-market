import React from 'react';

function Produce(props){

  return(
    <div className='produceDiv'>
      <h5 className='produceText'>{props.month}</h5>
      <ul>
      {props.selection.map((items,index) =>
        <li key={index}>{items}</li>

    )}
      </ul>

    </div>


  );
}

export default Produce;
