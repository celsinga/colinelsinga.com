import React, { useState } from 'react';
import './nav.scss';
import { render } from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';

export default function Navbar() {

  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
  
  return (
    <div className="nav">
      <button type="checkbox"></button>

      <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleChange} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      
    </div>

      <button type="checkbox"></button>
    </div>
  );
}