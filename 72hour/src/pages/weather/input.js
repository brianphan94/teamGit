import React from 'react';

const Input = (props) =>
{
    return (
      <div className="main">
            <input type="text" name="city" placeholder="Search Location" />
            
            <input type="text" name="country" placeholder="Search Country" />
            
            <button>Search</button>
       </div>
    )
}
export default Input;