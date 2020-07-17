import React from 'react';

const TopEvents = (e) =>{
  const handleFooter = (state,props) => {
    e.preventDefault();
    alert(e.target.value);
  }
  return(
    <a href="/" onClick={(e)=> this.handleFooter("Back to Home",e)}> Back To Home </a>
  );
}

export default TopEvents;
