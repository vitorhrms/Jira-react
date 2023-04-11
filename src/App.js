import React, {useState} from 'react';
import Timesheets from './components/Timesheet/Timesheets';
import AddTimesheet from './components/AddTimesheet/AddTimesheet';


const INITIAL_TIMESHEETS = [
];

function App() {
  const [timesheets, setTimesheets] = useState(INITIAL_TIMESHEETS);

  const addTimesheetHandler = timesheet =>{
    setTimesheets((prevTimesheets) => {
      return [timesheet, ...prevTimesheets];
    });
  };
  
  return (
    <div>
      <AddTimesheet onAddTimesheet={addTimesheetHandler}/>
      <Timesheets items={timesheets} />
    </div>
  );
}

export default App;