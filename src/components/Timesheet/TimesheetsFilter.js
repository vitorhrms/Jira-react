import React from 'react';

import './TimesheetsFilter.css';


function TimesheetsFilter(props) {

  const dropdownChangeHandler = event =>{
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className='timesheets-filter'>
      <div className='timesheets-filter__control'>
        <label>Filtro por mês em 2023:</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          <option value='0'>Jan</option>
          <option value='1'>Fev</option>
          <option value='2'>Mar</option>
          <option value='3'>Abr</option>
          <option value='4'>Mai</option>
          <option value='5'>Jun</option>
          <option value='6'>Jul</option>
          <option value='7'>Ago</option>
          <option value='8'>Set</option>
          <option value='9'>Out</option>
          <option value='10'>Nov</option>
          <option value='11'>Dez</option>
        </select>
      </div>
    </div>
  );
};

export default TimesheetsFilter;