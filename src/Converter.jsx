import React, { useState } from 'react';

function Converter() {
    const [km, setKm] = useState(0);
    const [m, setM] = useState(0);
  
    function handleChange(e) {
      setKm(e.target.value);
    }
    function handleChangeM(e) {
      setM(e.target.value);
    }
    function convert(km) {
      return (km / 1.609).toFixed(2);
    }
    function convertM(m) {
      return (m * 1.609).toFixed(2);
    }
  
    return (
      <div>
        <input type="text" value={km} onChange={handleChange} />
        <p>
          {' '}
          {km} km is {convert(km)} miles{' '}
        </p>
  
        <input type="text" value={m} onChange={handleChangeM} />
        <p>
          {' '}
          {m} M is {convertM(m)} Km{' '}
        </p>
      </div>
    );
  }


export default Converter ;