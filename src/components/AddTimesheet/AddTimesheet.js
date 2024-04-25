import './AddTimesheet.css';
import TimesheetForm from './TimesheetForm';
import { useState } from 'react';
import CurrencyInput from 'react-currency-input';

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

    const [value, setValue] = useState(0);
    const handleChange = (event, maskedValue, floatValue) => {
        setValue(floatValue);
    };
    console.log(value)
    return (
    <div className="add-timesheet">
        {!isEditing && <button onClick={startEditingHandler}>Adicionar nova tarefa</button>}
        {isEditing && <TimesheetForm onSaveTimesheetData={saveTimesheetDataHandler} onCancel={stopEditingHandler} />}
        <div>
            <CurrencyInput value={value} onChangeEvent={handleChange} prefix="R$ " decimalSeparator="," thousandSeparator="." />
        </div>
    </div>
    );
};

export default AddTimesheet;
