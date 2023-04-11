import './TimesheetDate.css';

function TimesheetDate(props) {
    const month = props.date.toLocaleString('br', {month:'long'});
    const months = month.charAt(0).toLocaleUpperCase() + month.slice(1)
    const day = +props.date.toLocaleString('br', {day:'2-digit'}) + 1;

    return (
    <div className="timesheet-date">
        <div className="timesheet-date__month">{months}</div>
        <div className="timesheet-date__day">{day <= 9 ? 0 : ''}{day}</div>
    </div>
    );
}

export default TimesheetDate;