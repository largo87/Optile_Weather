import React from 'react';

const CheckboxGroup = (props) => (
     
  <div className="checkbox-header">
  <label className="container"><input type="radio"   onChange={props.showComponents} name="radio"></input>
  <span className="checkmark"></span>
  Celcius
  </label>
  <label className="container"><input type="radio" onChange={props.showComponents} name="radio"></input>
   <span className="checkmark"></span>
  Fahrenheit
  </label>
  
</div>
       
    
)

export default CheckboxGroup;