import TimesheetDate from './TimesheetDate';
import Card from '../UI/Card';
import './TimesheetItem.css';

function TimesheetItem(props) {
    const dates = props.time;
    const hours = Math.floor(dates);
    
    const minutes = Math.round((dates - hours) * 60);
    let formattedTime = `${hours} Hora${hours > 1 ? 's' : ''}`; 
    if (hours === 0) {
        formattedTime = '';
    }
    if (minutes !== 0){
        formattedTime += ` ${minutes} Minuto${minutes > 1 ? 's' : ''}`;
    }

    return (
        <Card className='timesheet-item'>
            <TimesheetDate date={props.date}/>
            <div className='timesheet-item__description'>
                <h2>{props.task}</h2>
                <p>{props.desc}</p>
            </div>
            <div className='timesheet-item__price'>{formattedTime}</div>
        </Card>
    );
}

export default TimesheetItem;