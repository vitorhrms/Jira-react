import { useState } from "react";

import Card from "../UI/Card";
import TimesheetsFilter from "./TimesheetsFilter";
import './Timesheets.css';
import TimesheetsList from "./TimesheetsList";
import TimesheetsGrafic from "./TimesheetsGrafic";


function Timesheets(props) {
    const [filteredMonth, setFilteredMonth] = useState('0');

    const filterChangeHandler = selectedMonth => {
        setFilteredMonth(selectedMonth);
    };

    const filteredTimesheets = props.items.filter(timesheet =>{
        return timesheet.date.getMonth().toString() === filteredMonth;
    });

    return (
    <div>
        <Card className="timesheets">
            <TimesheetsFilter selected={filteredMonth} onChangeFilter={filterChangeHandler} />
            <TimesheetsGrafic timesheets={filteredTimesheets} selected={filteredMonth}/>
            <TimesheetsList items={filteredTimesheets} />
        </Card>
    </div>
    );
}

export default Timesheets;