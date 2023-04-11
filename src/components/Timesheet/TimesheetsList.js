import TimesheetItem from "./TimesheetItem";

import './TimesheetsList.css'


function TimesheetsList(props) {
    if (props.items.length === 0) {
        return <h2 className="timesheets-list__fallback">Nada bilhetado esse mês.</h2>
    }
    return <ul className="timesheets-list">
        {props.items.map((timesheet) => (
            <TimesheetItem
                key={timesheet.id}
                task={timesheet.task}
                desc={timesheet.desc}
                time={timesheet.time} 
                date={timesheet.date} 
            />
        ))}
    </ul>
};

export default TimesheetsList;