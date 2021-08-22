import React, { useState } from 'react';





export default function SearchBox(props) {
  const [name, setName] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    props.history.push(`/search/name/${name}`);
  };
  return (
    <form className="search" onSubmit={submitHandler}>
      <div className="row">
        <input
          type="text"
          name="q"
          id="q"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button className="primary1" type="submit" >
        <img src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"/>
        
       </button>
      </div>
    </form>
  );
}