import './AddTimesheet.css';
import TimesheetForm from './TimesheetForm';
import { useState } from 'react';

function AddTimesheet(props) {
    const [isEditing, setIsEditing] = useState(false);

    const saveTimesheetDataHandler = (enteredTimesheetData) => {
        const timesheetData = {
            ...enteredTimesheetData,
            id: Math.random().toString()
        };
        props.onAddTimesheet(timesheetData);
        setIsEditing(false);
    };

    const startEditingHandler = () =>{
        setIsEditing(true);
    };

    const stopEditingHandler = () =>{
        setIsEditing(false);
    };

    return (
    <div className="add-timesheet">
        {!isEditing && <button onClick={startEditingHandler}>Adicionar nova tarefa</button>}
        {isEditing && <TimesheetForm onSaveTimesheetData={saveTimesheetDataHandler} onCancel={stopEditingHandler} />}
    </div>
    );
};

export default AddTimesheet;
